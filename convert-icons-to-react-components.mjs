import fg from 'fast-glob';
import path from 'path';
import { readFile, writeFile, mkdir as fsMkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import * as prettier from 'prettier';
import { htmlToJsx } from 'html-to-jsx-transform';

// Support for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convert file name to PascalCase
function toPascalCase(str) {
  return str
    .replace(/(^\w|-\w)/g, (m) => m.replace(/-/, '').toUpperCase())
    .replace(/\.svg$/i, '');
}

// Format file with Prettier using API
async function formatWithPrettier(filePath) {
  const source = await readFile(filePath, 'utf8');
  const options = (await prettier.resolveConfig(filePath)) || {};
  // filepath is needed for correct parser selection
  const formatted = await prettier.format(source, {
    ...options,
    filepath: filePath,
  });
  await writeFile(filePath, formatted, 'utf8');
}

const inputDir = path.join(__dirname, './icons');
const outputDir = path.join(__dirname, './src/theme/components/ui/kit/icons');

async function main() {
  // Find all svg files in all subdirectories
  const svgFiles = await fg('**/*.svg', { cwd: inputDir });

  for (const relativePath of svgFiles) {
    const svgPath = path.join(inputDir, relativePath);
    const svgName = path.basename(svgPath, '.svg');
    const componentName = toPascalCase(svgName);
    const relativeDir = path.dirname(relativePath);
    const targetDir = path.join(outputDir, relativeDir);
    // Create target directory if it doesn't exist
    await fsMkdir(targetDir, { recursive: true });
    const tsxPath = path.join(targetDir, `${componentName}.tsx`);

    let svgContent = await readFile(svgPath, 'utf8');
    // Remove possible line breaks in svg
    svgContent = svgContent.replace(/\r?\n|\r/g, '');
    // Convert SVG to JSX
    let jsxContent = htmlToJsx(svgContent);
    // Add spread props to <svg>
    jsxContent = jsxContent.replace(/<svg([^>]*)>/, '<svg$1 {...props}>');
    const component = `export function ${componentName}(props: React.SVGProps<SVGSVGElement>) {\n  return (\n${jsxContent}\n  );\n}\n`;

    await writeFile(tsxPath, component, 'utf8');
    await formatWithPrettier(tsxPath);
    console.log(`Component created and formatted: ${tsxPath}`);
  }
}

main()
  .then(() => console.log('All SVGs have been converted to React components!'))
  .catch((err) => console.error('Error:', err));
