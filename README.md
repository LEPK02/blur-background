## Purpose
Personal tool for adding background/whitespace to images

## Usage
- For `.png` or `.jpg` files, add image to `/assets` folder and update path to image in `App.css`
- For `.svg` files:
  - Switch to the ["svg" branch](https://github.com/LEPK02/blur-background/tree/svg)
  - Convert SVG image to JSX using any online tool (e.g. [SVG Viewer](https://www.svgviewer.dev/svg-to-react-jsx))
  - Add the JSX as a React component and add `className="svg-icon"` to the `<svg>` element
- `npm start`
- Click on the rendered image in your browser and download
