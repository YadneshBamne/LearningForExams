import React, { useState } from "react";
import {
  ChevronRight,
  Code,
  Database,
  Server,
  Play,
  Globe,
   Flame, BookOpen, Sparkles
} from "lucide-react";

// Mini Interactive Demos with Dark Mode
function PasswordValidation() {
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const isValid = pw1 === pw2 && pw1.length >= 8;
  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">Password Validation Demo</h4>
      <input
        type="password"
        className="border border-gray-600 p-2 rounded m-1 w-full bg-[#2a2a2b] text-gray-200 placeholder-gray-400"
        placeholder="Password (min 8 chars)"
        onChange={(e) => setPw1(e.target.value)}
      />
      <input
        type="password"
        className="border border-gray-600 p-2 rounded m-1 w-full bg-[#2a2a2b] text-gray-200 placeholder-gray-400"
        placeholder="Confirm password"
        onChange={(e) => setPw2(e.target.value)}
      />
      {pw2 && (
        <div className="mt-2">
          <span className={isValid ? "text-green-400" : "text-red-400"}>
            {isValid ? "✅ Passwords match and valid" : "❌ Invalid or no match"}
          </span>
          <p className="text-xs text-gray-400 mt-1">
            {pw1.length < 8 ? "Password must be at least 8 characters" : ""}
          </p>
        </div>
      )}
      <p className="text-xs mt-2 text-gray-400">This demo shows real-time validation using React state. As you type, JavaScript checks if passwords match and meet length requirements.</p>
    </div>
  );
}

function JSPlayground() {
  const [code, setCode] = useState('console.log("Hello, IP!");');
  const [output, setOutput] = useState("");
  function runCode() {
    try {
      let log = "";
      const logFunc = (...args) => {
        log += args.join(" ") + "\n";
      };
      new Function("console", code)({ log: logFunc });
      setOutput(log ? log : "(No output)");
    } catch (e) {
      setOutput(String(e));
    }
  }
  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">JavaScript Playground</h4>
      <textarea
        className="border border-gray-600 p-2 rounded w-full font-mono mb-2 text-sm bg-[#2a2a2b] text-gray-200"
        value={code}
        rows={5}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="bg-blue-700 text-gray-200 rounded px-3 py-1 hover:bg-blue-600"
        onClick={runCode}
      >
        Run Code
      </button>
      <pre className="bg-[#2a2a2b] mt-2 p-2 rounded text-green-400 font-mono text-xs">
        {output}
      </pre>
      <p className="text-xs mt-2 text-gray-400">Experiment with JS code. The output shows console logs or errors. Note: This is a safe sandbox; it doesn't affect the page.</p>
    </div>
  );
}

function DOMDemo() {
  const [el, setEl] = useState("div");
  const [content, setContent] = useState("Dynamic Content");
  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">DOM Manipulation Demo</h4>
      <select
        className="border border-gray-600 p-1 mr-2 rounded text-sm bg-[#2a2a2b] text-gray-200"
        value={el}
        onChange={(e) => setEl(e.target.value)}
      >
        <option>div</option>
        <option>p</option>
        <option>h3</option>
        <option>span</option>
        <option>button</option>
      </select>
      <input
        type="text"
        className="border border-gray-600 p-1 mr-2 rounded text-sm bg-[#2a2a2b] text-gray-200"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <span className="ml-2 text-sm text-gray-200">Result: </span>
      {React.createElement(
        el,
        { className: "shadow rounded inline-block px-4 bg-[#2a2a2b] text-gray-200 mt-2" },
        content
      )}
      <p className="text-xs mt-2 text-gray-400">This uses React.createElement to dynamically create DOM elements based on your input, simulating JS DOM manipulation.</p>
    </div>
  );
}

function SessionCookieDemo() {
  const [val, setVal] = useState("");
  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">Session & Cookie Demo</h4>
      <input
        className="border border-gray-600 rounded p-1 mr-2 text-sm w-full bg-[#2a2a2b] text-gray-200 placeholder-gray-400"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter username"
      />
      <div className="flex gap-2 mt-2">
        <button
          className="bg-green-700 text-gray-200 rounded px-2 py-1 text-sm hover:bg-green-600"
          onClick={() => sessionStorage.setItem("user", val)}
        >
          Set Session
        </button>
        <button
          className="bg-yellow-700 text-gray-200 rounded px-2 py-1 text-sm hover:bg-yellow-600"
          onClick={() => (document.cookie = `user=${val};path=/`)}
        >
          Set Cookie
        </button>
        <button
          className="bg-gray-600 text-gray-200 rounded px-2 py-1 text-sm hover:bg-gray-500"
          onClick={() => {
            sessionStorage.removeItem("user");
            document.cookie = `user=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
          }}
        >
          Clear
        </button>
      </div>
      <div className="text-xs mt-2 text-gray-400">
        Session: {sessionStorage.getItem("user") || "(none)"} | Cookie:{" "}
        {document.cookie || "(none)"}
      </div>
      <p className="text-xs mt-2 text-gray-400">Session data is stored in browser memory (lost on close), cookies on disk. Refresh the page to see persistence.</p>
    </div>
  );
}

function CSSPlayground() {
  const [cssProps, setCssProps] = useState({
    backgroundColor: "#2a2a2b",
    color: "#d1d5db",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "0px",
    boxShadow: "none",
    display: "block",
    margin: "0px",
  });

  const handleChange = (prop, value) => {
    setCssProps((prev) => ({ ...prev, [prop]: value }));
  };

  const style = {
    backgroundColor: cssProps.backgroundColor,
    color: cssProps.color,
    fontSize: cssProps.fontSize,
    padding: cssProps.padding,
    borderRadius: cssProps.borderRadius,
    boxShadow: cssProps.boxShadow,
    display: cssProps.display,
    margin: cssProps.margin,
    minHeight: "100px",
    width: "100%",
    border: "1px solid #4b5563",
  };

  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">CSS Properties Playground</h4>
      <p className="text-xs mb-2 text-gray-400">Adjust sliders and selectors to see how each property affects the element below. This helps visualize the CSS box model and styling.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs block mb-1 text-gray-200">Background Color</label>
          <input
            type="color"
            value={cssProps.backgroundColor}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
            className="w-full bg-[#2a2a2b]"
          />
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Text Color</label>
          <input
            type="color"
            value={cssProps.color}
            onChange={(e) => handleChange("color", e.target.value)}
            className="w-full bg-[#2a2a2b]"
          />
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Font Size</label>
          <input
            type="range"
            min="12"
            max="32"
            value={parseInt(cssProps.fontSize)}
            onChange={(e) => handleChange("fontSize", `${e.target.value}px`)}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Padding</label>
          <input
            type="range"
            min="0"
            max="20"
            value={parseInt(cssProps.padding)}
            onChange={(e) => handleChange("padding", `${e.target.value}px`)}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Border Radius</label>
          <input
            type="range"
            min="0"
            max="20"
            value={parseInt(cssProps.borderRadius)}
            onChange={(e) => handleChange("borderRadius", `${e.target.value}px`)}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Box Shadow</label>
          <select
            value={cssProps.boxShadow}
            onChange={(e) => handleChange("boxShadow", e.target.value)}
            className="w-full border border-gray-600 rounded p-1 text-sm bg-[#2a2a2b] text-gray-200"
          >
            <option value="none">None</option>
            <option value="0 4px 6px rgba(0,0,0,0.5)">Light</option>
            <option value="0 8px 12px rgba(0,0,0,0.6)">Medium</option>
            <option value="0 12px 18px rgba(0,0,0,0.7)">Heavy</option>
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Display</label>
          <select
            value={cssProps.display}
            onChange={(e) => handleChange("display", e.target.value)}
            className="w-full border border-gray-600 rounded p-1 text-sm bg-[#2a2a2b] text-gray-200"
          >
            <option value="block">Block</option>
            <option value="inline">Inline</option>
            <option value="inline-block">Inline-Block</option>
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Margin</label>
          <input
            type="range"
            min="0"
            max="20"
            value={parseInt(cssProps.margin)}
            onChange={(e) => handleChange("margin", `${e.target.value}px`)}
            className="w-full"
          />
        </div>
      </div>
      <div style={style} className="rounded">
        Sample Text: Adjust CSS properties above to see changes live!
      </div>
      <pre className="bg-[#2a2a2b] mt-2 p-2 rounded text-xs font-mono text-gray-200">
        {JSON.stringify(cssProps, null, 2)}
      </pre>
    </div>
  );
}

function FlexboxDemo() {
  const [flexProps, setFlexProps] = useState({
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "10px",
  });

  const handleChange = (prop, value) => {
    setFlexProps((prev) => ({ ...prev, [prop]: value }));
  };

  const containerStyle = {
    display: "flex",
    flexDirection: flexProps.flexDirection,
    justifyContent: flexProps.justifyContent,
    alignItems: flexProps.alignItems,
    gap: flexProps.gap,
    minHeight: "150px",
    backgroundColor: "#2a2a2b",
    padding: "10px",
    borderRadius: "4px",
  };

  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">Flexbox Playground</h4>
      <p className="text-xs mb-2 text-gray-400">Flexbox aligns items in one dimension. Change properties to see how items arrange along main and cross axes.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs block mb-1 text-gray-200">Flex Direction</label>
          <select
            value={flexProps.flexDirection}
            onChange={(e) => handleChange("flexDirection", e.target.value)}
            className="w-full border border-gray-600 rounded p-1 text-sm bg-[#2a2a2b] text-gray-200"
          >
            <option value="row">Row (horizontal)</option>
            <option value="column">Column (vertical)</option>
            <option value="row-reverse">Row Reverse</option>
            <option value="column-reverse">Column Reverse</option>
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Justify Content (Main Axis)</label>
          <select
            value={flexProps.justifyContent}
            onChange={(e) => handleChange("justifyContent", e.target.value)}
            className="w-full border border-gray-600 rounded p-1 text-sm bg-[#2a2a2b] text-gray-200"
          >
            <option value="flex-start">Start</option>
            <option value="flex-end">End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Align Items (Cross Axis)</label>
          <select
            value={flexProps.alignItems}
            onChange={(e) => handleChange("alignItems", e.target.value)}
            className="w-full border border-gray-600 rounded p-1 text-sm bg-[#2a2a2b] text-gray-200"
          >
            <option value="flex-start">Start</option>
            <option value="flex-end">End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Gap (Spacing)</label>
          <input
            type="range"
            min="0"
            max="20"
            value={parseInt(flexProps.gap)}
            onChange={(e) => handleChange("gap", `${e.target.value}px`)}
            className="w-full"
          />
        </div>
      </div>
      <div style={containerStyle}>
        <div className="bg-blue-800 p-2 rounded text-gray-200">Item 1</div>
        <div className="bg-blue-700 p-2 rounded text-gray-200">Item 2</div>
        <div className="bg-blue-600 p-2 rounded text-gray-200">Item 3</div>
      </div>
    </div>
  );
}

function GridDemo() {
  const [gridProps, setGridProps] = useState({
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  });

  const handleChange = (prop, value) => {
    setGridProps((prev) => ({ ...prev, [prop]: value }));
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: gridProps.gridTemplateColumns,
    gap: gridProps.gap,
    minHeight: "150px",
    backgroundColor: "#2a2a2b",
    padding: "10px",
    borderRadius: "4px",
  };

  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">CSS Grid Playground</h4>
      <p className="text-xs mb-2 text-gray-400">Grid creates 2D layouts. Define columns/rows, place items. Observe how items fill the grid cells.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs block mb-1 text-gray-200">Grid Template Columns</label>
          <select
            value={gridProps.gridTemplateColumns}
            onChange={(e) => handleChange("gridTemplateColumns", e.target.value)}
            className="w-full border border-gray-600 rounded p-1 text-sm bg-[#2a2a2b] text-gray-200"
          >
            <option value="1fr 1fr">2 Equal Columns</option>
            <option value="1fr 1fr 1fr">3 Equal Columns</option>
            <option value="2fr 1fr">2:1 Columns</option>
            <option value="100px 1fr">Fixed + Flexible</option>
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1 text-gray-200">Gap</label>
          <input
            type="range"
            min="0"
            max="20"
            value={parseInt(gridProps.gap)}
            onChange={(e) => handleChange("gap", `${e.target.value}px`)}
            className="w-full"
          />
        </div>
      </div>
      <div style={containerStyle}>
        <div className="bg-purple-800 p-2 rounded text-gray-200">Item 1</div>
        <div className="bg-purple-700 p-2 rounded text-gray-200">Item 2</div>
        <div className="bg-purple-600 p-2 rounded text-gray-200">Item 3</div>
        <div className="bg-purple-500 p-2 rounded text-gray-200">Item 4</div>
      </div>
    </div>
  );
}

function ServletPlayground() {
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState("");
  const simulateServlet = () => {
    const responses = {
      GET: "<h1>Hello from GET: Retrieve data</h1><p>Typically used for reading resources without side effects.</p>",
      POST: "<h1>Data received via POST!</h1><p>Used for creating new resources or submitting forms.</p>",
      PUT: "<h1>Resource updated via PUT!</h1><p>Idempotent method for updating existing resources.</p>",
      DELETE: "<h1>Resource deleted via DELETE!</h1><p>Removes a resource; also idempotent.</p>",
    };
    setResponse(responses[method] || "<h1>No response</h1>");
  };

  return (
    <div className="p-4 bg-[#1e1e1f] rounded-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-200">Servlet HTTP Methods Simulation</h4>
      <p className="text-xs mb-2 text-gray-400">Select a method and 'send' to see a simulated servlet response. In real servlets, each method handles specific request types.</p>
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="border border-gray-600 rounded p-1 mr-2 text-sm bg-[#2a2a2b] text-gray-200"
      >
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>
      <button
        className="bg-purple-700 text-gray-200 rounded px-2 py-1 text-sm hover:bg-purple-600"
        onClick={simulateServlet}
      >
        Send Request
      </button>
      <div
        className="mt-2 p-2 bg-[#2a2a2b] rounded text-sm text-gray-200"
        dangerouslySetInnerHTML={{ __html: response }}
      />
    </div>
  );
}

// Syllabus data (unchanged content, styled for dark mode)
const majorSections = [
  {
    key: "css",
    title: "CSS & Its Types",
    icon: <Code className="w-6 h-6" />,
    color: "bg-blue-700",
    subtopics: [
      {
        key: "fundamentals",
        name: "CSS Fundamentals",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2 font-semibold">What is CSS?</p>
            <p className="mb-2">Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML. It controls layout, colors, fonts, and more, separating content from design for better maintainability.</p>
            <p className="mb-2 font-semibold">Why Use CSS?</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Consistency: Apply styles across multiple pages.</li>
              <li>Accessibility: Improve readability and usability.</li>
              <li>Efficiency: Reduce HTML code bloat.</li>
            </ul>
            <p className="mb-2 font-semibold">Types of CSS:</p>
            <ul className="list-disc ml-6 mb-3">
              <li><strong>Inline CSS:</strong> Styles applied directly in HTML elements using the 'style' attribute. Example: <code className="bg-[#2a2a2b] px-1 rounded">&lt;div style="color: red; background-color: yellow;"&gt;Text&lt;/div&gt;</code>. Pros: Quick for testing. Cons: Hard to maintain, no reuse.</li>
              <li><strong>Internal CSS:</strong> Defined within &lt;style&gt; tags in the HTML head. Example: <code className="bg-[#2a2a2b] px-1 rounded">&lt;style&gt; div {'{'} color: red; {'}'} &lt;/style&gt;</code>. Pros: Page-specific styles. Cons: Not reusable across pages.</li>
              <li><strong>External CSS:</strong> Linked via &lt;link&gt; tag to a separate .css file. Example: <code className="bg-[#2a2a2b] px-1 rounded">&lt;link rel="stylesheet" href="styles.css"&gt;</code>. Pros: Reusable, cacheable. Cons: Extra HTTP request.</li>
            </ul>
            <p className="mb-2 font-semibold">CSS Syntax:</p>
            <p className="mb-2">selector {'{'} property: value; {'}'} - Selector targets elements, property defines what to style, value sets how.</p>
            <p className="mb-2 font-semibold">CSS Selectors (Logical Progression):</p>
            <ul className="list-disc ml-6">
              <li><strong>Basic Selectors:</strong> Element (div), Class (.class), ID (#id). Start with these for simple targeting.</li>
              <li><strong>Attribute Selectors:</strong> [attr="value"], e.g., input[type="text"]. Use for form elements.</li>
              <li><strong>Pseudo-classes:</strong> :hover, :active. Add interactivity.</li>
              <li><strong>Pseudo-elements:</strong> ::before, ::after. Insert content.</li>
              <li><strong>Combinators:</strong> Descendant (space), Child (&gt;), Adjacent (+), General Sibling (~). Build complex rules.</li>
            </ul>
            <p className="mt-2 text-xs text-gray-400">Cascade Rule: Styles are applied based on specificity (ID - Class - Element) and order (last wins). !important overrides.</p>
          </div>
        ),
      },
      {
        key: "properties",
        name: "CSS Properties",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">CSS properties are categorized for logical learning: Start with colors/text, then box model, layout, effects.</p>
            <p className="mb-2 font-semibold">Color and Background:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>color: Text color (hex, rgb, hsl).</li>
              <li>background-color: Element background.</li>
              <li>background-image: url('img.jpg'); gradients: linear-gradient(to right, red, blue).</li>
            </ul>
            <p className="mb-2 font-semibold">Text and Fonts:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>font-family: 'Arial', sans-serif; (stack for fallbacks).</li>
              <li>font-size: 16px or 1em (relative to parent).</li>
              <li>font-weight: bold or 700; text-align: center; line-height: 1.5;</li>
            </ul>
            <p className="mb-2 font-semibold">Box Model (Core Concept):</p>
            <p className="mb-2">Every element is a box: content + padding + border + margin. box-sizing: border-box; includes padding/border in width/height.</p>
            <ul className="list-disc ml-6 mb-3">
              <li>margin: Space outside border (collapse between elements).</li>
              <li>padding: Space inside border.</li>
              <li>border: 1px solid black; border-radius: 5px;</li>
            </ul>
            <p className="mb-2 font-semibold">Layout Properties:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>display: block (full width), inline (flow), none (hide), flex/grid (modern layouts).</li>
              <li>position: static (default), relative (offset from normal), absolute (from ancestor), fixed (viewport), sticky (hybrid).</li>
              <li>width/height: auto, %, px; min/max-width.</li>
            </ul>
            <p className="mb-2 font-semibold">Effects and Interactions:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>box-shadow: 0 2px 4px rgba(0,0,0,0.1);</li>
              <li>transition: all 0.3s ease; (smooth changes).</li>
              <li>opacity: 0.5; cursor: pointer;</li>
            </ul>
            <p className="mb-2 font-semibold">Advanced: @media for responsive, variables (--var: value;).</p>
            <CSSPlayground />
          </div>
        ),
      },
      {
        key: "flexbox",
        name: "Flexbox Layout",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Flexbox is a 1D layout model for aligning items in rows or columns. Apply display: flex; to parent container.</p>
            <p className="mb-2 font-semibold">Key Concepts (Step-by-Step):</p>
            <ol className="list-decimal ml-6 mb-3">
              <li><strong>Axes:</strong> Main axis (flex-direction: row/column), Cross axis (perpendicular).</li>
              <li><strong>Container Properties:</strong> flex-direction, justify-content (main axis alignment), align-items (cross axis), flex-wrap: wrap; gap: 10px;</li>
              <li><strong>Item Properties:</strong> flex-grow: 1; (share space), flex-shrink, flex-basis: 200px; order: 1; (reorder).</li>
              <li><strong>Common Layouts:</strong> Centered: justify-content/align-items: center; Navigation: row, space-between.</li>
            </ol>
            <p className="mb-2">Advantages: Responsive without floats, easy alignment. Limitations: Not for 2D grids (use CSS Grid).</p>
            <FlexboxDemo />
          </div>
        ),
      },
      {
        key: "grid",
        name: "CSS Grid",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">CSS Grid is a 2D layout system. Set display: grid; on container.</p>
            <p className="mb-2 font-semibold">Building a Grid (Logical Steps):</p>
            <ol className="list-decimal ml-6 mb-3">
              <li><strong>Define Tracks:</strong> grid-template-columns: 1fr 2fr; (fractions), or repeat(3, 1fr); grid-template-rows: 100px auto;</li>
              <li><strong>Place Items:</strong> grid-column: 1 / 3; (span lines), grid-area: name;</li>
              <li><strong>Spacing & Alignment:</strong> gap: 10px; justify-items, align-items.</li>
              <li><strong>Auto Features:</strong> grid-auto-flow: row; minmax(100px, auto);</li>
            </ol>
            <p className="mb-2">Use Cases: Complex pages, galleries. Combines with Flexbox for nested layouts.</p>
            <GridDemo />
          </div>
        ),
      },
      {
        key: "responsive",
        name: "Responsive Design",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Responsive design adapts layouts to device sizes using fluid grids, flexible images, media queries.</p>
            <p className="mb-2 font-semibold">Core Principles:</p>
            <ul className="list-disc ml-6 mb-3">
              <li><strong>Mobile-First:</strong> Style for small screens first, then add @media for larger.</li>
              <li><strong>Media Queries:</strong> @media (min-width: 768px) {'{'} .class {'{'} width: 50%; {'}'} {'}'}. Breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop).</li>
              <li><strong>Flexible Units:</strong> %, vw/vh, rem/em instead of px.</li>
              <li><strong>Images:</strong> max-width: 100%; height: auto;</li>
              <li><strong>Hide/Show:</strong> display: none; or visibility: hidden; per device.</li>
            </ul>
            <p className="mb-2">Test: Use browser dev tools to simulate devices.</p>
            <div className="p-4 bg-[#1e1e1f] rounded-lg">
              <h4 className="text-sm font-semibold mb-2 text-gray-200">Responsive Demo</h4>
              <div className="bg-blue-800 p-4 rounded text-sm sm:bg-green-800 md:bg-purple-800 lg:bg-yellow-800 text-gray-200">
                Resize your browser: Blue (small), Green (sm), Purple (md), Yellow (lg). This uses Tailwind breakpoints.
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "external",
        name: "External Stylesheets",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">External CSS promotes separation of concerns (HTML structure, CSS style, JS behavior).</p>
            <p className="mb-2 font-semibold">How to Use:</p>
            <ol className="list-decimal ml-6 mb-3">
              <li>Create styles.css: body {'{'} margin: 0; {'}'} </li>
              <li>Link in HTML: &lt;link rel="stylesheet" href="/css/styles.css"&gt;</li>
              <li>Folder Structure: root/index.html, root/css/styles.css for organization.</li>
            </ol>
            <p className="mb-2 font-semibold">Best Practices:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Minify CSS for production.</li>
              <li>Use cache-busting: href="styles.css?v=1".</li>
              <li>Multiple files: base.css, components.css.</li>
            </ul>
            <p className="mb-2">Advantages: Easier updates, faster loads via caching.</p>
          </div>
        ),
      },
      {
        key: "resources",
        name: "CSS Resources",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Build skills with these reliable sources:</p>
            <ul className="list-disc ml-6">
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">MDN CSS Docs</a>: Official reference with examples.</li>
              <li><a href="https://css-tricks.com/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">CSS-Tricks</a>: Tutorials on advanced topics like Flexbox/Grid.</li>
              <li><a href="https://caniuse.com/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Can I Use</a>: Check browser support for properties.</li>
              <li>FreeCodeCamp CSS Challenges: Hands-on practice.</li>
            </ul>
            <p className="mt-2 text-xs text-gray-400">Start with MDN for basics, then explore tutorials for real-world applications.</p>
          </div>
        ),
      },
    ],
  },
  {
    key: "dom",
    title: "DOM Model",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-green-700",
    subtopics: [
      {
        key: "overview",
        name: "DOM Overview",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2 font-semibold">What is the DOM?</p>
            <p className="mb-2">The Document Object Model (DOM) is a tree-like representation of the HTML document, allowing programs (like JS) to read, change, add, or delete elements.</p>
            <p className="mb-2 font-semibold">Structure (Logical Breakdown):</p>
            <ul className="list-disc ml-6 mb-3">
              <li><strong>Nodes:</strong> Everything is a node - elements (&lt;div&gt;), attributes (class=""), text ("Hello").</li>
              <li><strong>Tree Hierarchy:</strong> document → html → head/body → children.</li>
            </ul>
            <p className="mb-2 font-semibold">Accessing the DOM:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>document.getElementById('id') - Fast for unique IDs.</li>
              <li>document.getElementsByClassName('class') - Returns collection.</li>
              <li>document.querySelector('selector') - CSS selector, first match.</li>
              <li>document.querySelectorAll - All matches.</li>
            </ul>
            <p className="mb-2 font-semibold">Traversing:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>parentNode, firstChild, lastChild, nextSibling.</li>
              <li>Example: elem.parentNode.style.color = 'red';</li>
            </ul>
            <p className="mb-2 font-semibold">Modifying:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>createElement('div'), appendChild(node), removeChild.</li>
              <li>innerHTML = '&lt;p&gt;New&lt;/p&gt;'; textContent = 'Text';</li>
              <li>setAttribute('class', 'new');</li>
            </ul>
            <p className="mb-2 font-semibold">Events:</p>
            <p className="mb-2">addEventListener('click', function(e) {'{'} ... {'}'}); e.target for the element clicked.</p>
            <p className="mt-2 text-xs text-gray-400">DOM is dynamic: Changes reflect immediately in the browser.</p>
          </div>
        ),
      },
      {
        key: "manipulation",
        name: "DOM Manipulation Playground",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Practice creating and modifying elements dynamically. This demo uses React but simulates pure JS DOM ops.</p>
            <DOMDemo />
            <p className="mt-2">In JS: const el = document.createElement('div'); el.textContent = 'Hello'; document.body.appendChild(el);</p>
          </div>
        ),
      },
    ],
  },
  {
    key: "javascript",
    title: "JavaScript",
    icon: <Play className="w-6 h-6" />,
    color: "bg-yellow-700",
    subtopics: [
      {
        key: "fundamentals",
        name: "JS Fundamentals",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">JavaScript (JS) is a high-level, interpreted language for web interactivity. Runs in browsers (client-side) or servers (Node.js).</p>
            <p className="mb-2 font-semibold">Variables and Data Types (Basics First):</p>
            <ul className="list-disc ml-6 mb-3">
              <li>var (function-scoped), let/const (block-scoped). Use const for constants.</li>
              <li>Primitives: number (1.5), string ('hi'), boolean (true), null, undefined.</li>
              <li>Objects: {'{'} key: value {'}'}, Arrays [1,2].</li>
            </ul>
            <p className="mb-2 font-semibold">Operators and Control Flow:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Arithmetic: +, -, *, /, %; Comparison: == (loose), === (strict).</li>
              <li>if/else, switch for decisions; for, while, do-while for loops.</li>
              <li>for...of (iterables), for...in (objects).</li>
            </ul>
            <p className="mb-2 font-semibold">Functions:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>function name(params) {'{'} return; {'}'}; Arrow: (params) =&gt; value;</li>
              <li>Scope: Variables inside functions are local.</li>
            </ul>
            <p className="mb-2 font-semibold">Modern Features:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Template literals: `Hello ${name}`;</li>
              <li>Destructuring: const {'{'}a, b{'}'} = obj;</li>
              <li>Spread: [...arr, 4];</li>
            </ul>
            <JSPlayground />
          </div>
        ),
      },
      {
        key: "domjs",
        name: "DOM Scripting",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">JS manipulates the DOM for dynamic pages.</p>
            <p className="mb-2 font-semibold">Steps to Script DOM:</p>
            <ol className="list-decimal ml-6 mb-3">
              <li>Select: const el = document.querySelector('.class');</li>
              <li>Modify: el.style.color = 'blue'; el.classList.add('active');</li>
              <li>Events: el.addEventListener('click', () =&gt; alert('Clicked'));</li>
            </ol>
            <p className="mb-2">Best Practices: Use event delegation for efficiency, avoid inline JS.</p>
            <DOMDemo />
          </div>
        ),
      },
      {
        key: "password",
        name: "Password Validation",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Form validation ensures data integrity. Here, JS checks password match and length in real-time.</p>
            <p className="mb-2 font-semibold">How It Works:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>On change, compare values.</li>
              <li>Use regex for complexity: /.{8}/ for min length.</li>
              <li>Prevent submit if invalid: e.preventDefault();</li>
            </ul>
            <PasswordValidation />
          </div>
        ),
      },
      {
        key: "playground",
        name: "JavaScript Playground",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Test code snippets. Errors are caught safely.</p>
            <JSPlayground />
          </div>
        ),
      },
      {
        key: "validation",
        name: "Advanced JS Features",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Build on fundamentals with ES6+ for modern code.</p>
            <p className="mb-2 font-semibold">Validation Techniques:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Regex: email.test(/@/) for patterns.</li>
              <li>Disable button if invalid: button.disabled = !valid;</li>
            </ul>
            <p className="mb-2 font-semibold">ES6+ Features:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Promises: new Promise((res, rej) =&gt; ...).then();</li>
              <li>Async/Await: async function() {'{'} await fetch(); {'}'}</li>
              <li>Modules: import/export for code organization.</li>
              <li>Closures: Function returning function with private vars.</li>
              <li>Try-Catch: for error handling.</li>
            </ul>
            <JSPlayground />
          </div>
        ),
      },
    ],
  },
  {
    key: "servlet",
    title: "Servlet Architecture",
    icon: <Server className="w-6 h-6" />,
    color: "bg-purple-700",
    subtopics: [
      {
        key: "lifecycle",
        name: "Servlet Lifecycle",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Servlets are Java classes that extend HttpServlet to handle web requests in a server.</p>
            <p className="mb-2 font-semibold">Lifecycle Phases (Sequential):</p>
            <ol className="list-decimal ml-6 mb-3">
              <li><strong>init():</strong> Called once on load. Initialize resources like DB connections.</li>
              <li><strong>service():</strong> Called per request. Dispatches to doGet/doPost etc.</li>
              <li><strong>destroy():</strong> Called on unload. Clean up resources.</li>
            </ol>
            <p className="mb-2">Use: Dynamic web apps, e.g., process forms, generate HTML.</p>
            <ServletPlayground />
          </div>
        ),
      },
      {
        key: "methods",
        name: "HTTP Methods & Request/Response",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Servlets handle HTTP verbs via overridden methods.</p>
            <p className="mb-2 font-semibold">Key Methods:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>doGet: Read-only requests (query params).</li>
              <li>doPost: Submit data (body params).</li>
              <li>doPut: Update resources.</li>
              <li>doDelete: Remove resources.</li>
            </ul>
            <p className="mb-2 font-semibold">Request/Response:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>req.getParameter('name'); req.getHeader('User-Agent');</li>
              <li>resp.setContentType('text/html'); resp.getWriter().println('Hi');</li>
              <li>Forward: req.getRequestDispatcher('page.jsp').forward(req, resp);</li>
              <li>Redirect: resp.sendRedirect('url');</li>
            </ul>
            <ServletPlayground />
          </div>
        ),
      },
      {
        key: "mapping",
        name: "Mapping & Deployment",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Map servlets to URLs for routing.</p>
            <p className="mb-2 font-semibold">Mapping Ways:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Annotation: @WebServlet("/path") on class.</li>
              <li>web.xml: &lt;servlet-mapping&gt; &lt;url-pattern&gt;/path&lt;/url-pattern&gt;</li>
            </ul>
            <p className="mb-2 font-semibold">Deployment:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Container: Tomcat runs servlets.</li>
              <li>Package as WAR (Web ARchive) for servers.</li>
            </ul>
            <pre className="text-xs bg-[#2a2a2b] text-green-400 rounded-lg p-2 overflow-x-auto">
              {`@WebServlet("/demo")
public class DemoServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    resp.setContentType("text/html");
    PrintWriter out = resp.getWriter();
    out.println("<h1>Hello from servlet!</h1>");
  }
}`}
            </pre>
          </div>
        ),
      },
      {
        key: "threads",
        name: "Thread Safety",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Servlets are multi-threaded: One instance serves multiple requests concurrently.</p>
            <p className="mb-2 font-semibold">Issues and Solutions:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Avoid instance variables (shared across threads).</li>
              <li>Use local variables in methods (thread-safe).</li>
              <li>Synchronize critical sections: synchronized(this) {'{'} ... {'}'} but avoid for performance.</li>
              <li>Store user data in HttpSession, not servlet fields.</li>
            </ul>
            <p className="mb-2">Best Practice: Design stateless servlets where possible.</p>
          </div>
        ),
      },
      {
        key: "sample",
        name: "Servlet Playground",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Simulate how servlets respond to different methods.</p>
            <ServletPlayground />
          </div>
        ),
      },
    ],
  },
  {
    key: "session",
    title: "Session Management",
    icon: <Database className="w-6 h-6" />,
    color: "bg-red-700",
    subtopics: [
      {
        key: "overview",
        name: "Session Management Overview",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2 font-semibold">Why Session Management?</p>
            <p className="mb-2">HTTP is stateless: Each request is independent. Sessions track user state (e.g., login) across requests.</p>
            <p className="mb-2 font-semibold">Mechanisms:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Sessions: Server-side storage, ID in cookie or URL.</li>
              <li>Cookies: Client-side key-value pairs sent with requests.</li>
            </ul>
            <SessionCookieDemo />
          </div>
        ),
      },
      {
        key: "sessions",
        name: "Sessions",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">In Java, HttpSession interface manages sessions.</p>
            <p className="mb-2 font-semibold">Working with Sessions:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Get: HttpSession session = req.getSession(); (creates if none).</li>
              <li>Store: session.setAttribute("user", "John");</li>
              <li>Retrieve: String user = (String) session.getAttribute("user");</li>
              <li>Invalidate: session.invalidate(); (logout).</li>
              <li>Timeout: session.setMaxInactiveInterval(1800); // 30 min</li>
            </ul>
            <p className="mb-2">Security: Sessions are safer as data stays on server.</p>
            <SessionCookieDemo />
          </div>
        ),
      },
      {
        key: "cookies",
        name: "Cookies",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Cookies are small text files stored by browser.</p>
            <p className="mb-2 font-semibold">Handling Cookies:</p>
            <ul className="list-disc ml-6 mb-3">
              <li>Create: Cookie c = new Cookie("key", "value"); resp.addCookie(c);</li>
              <li>Attributes: c.setMaxAge(3600); // seconds, setPath("/"), setSecure(true), setHttpOnly(true);</li>
              <li>Read: Cookie[] cookies = req.getCookies(); loop to find.</li>
              <li>Delete: c.setMaxAge(0); resp.addCookie(c);</li>
            </ul>
            <p className="mb-2">Use: Remember preferences, tracking. Security: HttpOnly prevents JS access.</p>
            <SessionCookieDemo />
          </div>
        ),
      },
      {
        key: "compare",
        name: "Sessions vs. Cookies",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Choose based on needs:</p>
            <table className="w-full max-w-lg text-sm mt-2 border-collapse border border-gray-600">
              <thead>
                <tr className="bg-[#2a2a2b]">
                  <th className="p-2 border border-gray-600">Aspect</th>
                  <th className="p-2 border border-gray-600">Session</th>
                  <th className="p-2 border border-gray-600">Cookie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-600">Storage</td>
                  <td className="p-2 border border-gray-600">Server (secure, scalable)</td>
                  <td className="p-2 border border-gray-600">Client (browser)</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Lifetime</td>
                  <td className="p-2 border border-gray-600">Until timeout or invalidate</td>
                  <td className="p-2 border border-gray-600">Set by expires/max-age</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Security</td>
                  <td className="p-2 border border-gray-600">Higher (data not sent)</td>
                  <td className="p-2 border border-gray-600">Lower (can be tampered)</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Data Size</td>
                  <td className="p-2 border border-gray-600">Unlimited (server)</td>
                  <td className="p-2 border border-gray-600">~4KB per cookie</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-gray-400">Use sessions for sensitive data, cookies for non-critical persistence.</p>
            <SessionCookieDemo />
          </div>
        ),
      },
      {
        key: "demo",
        name: "Session & Cookie Playground",
        content: (
          <div className="text-sm text-gray-200">
            <p className="mb-2">Hands-on: Set values, refresh/clear to observe behavior.</p>
            <SessionCookieDemo />
          </div>
        ),
      },
    ],
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("css");
  const [activeSubtopic, setActiveSubtopic] = useState(
    majorSections[0].subtopics[0].key
  );

  const sectionData = majorSections.find((s) => s.key === activeSection);
  const subtopic =
    sectionData.subtopics.find((s) => s.key === activeSubtopic) ||
    sectionData.subtopics[0];

  return (
    <div className="min-h-screen bg-[#131314]">
       <header className="relative bg-gradient-to-r from-[#1a1a1b] via-[#2d1b2d] to-[#1a1a1b] shadow-2xl overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-500 to-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-4 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Left side - Brand */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <Flame className="w-10 h-10 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text hover:from-red-300 hover:via-pink-400 hover:to-purple-400 transition-all duration-300 cursor-default">
                For Hot Peoples
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-px w-8 bg-gradient-to-r from-red-500 to-transparent"></div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Premium Learning Experience
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-purple-500 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Motivational message */}
          <div className="flex items-center gap-3 group">
            <div className="text-center">
              <p className="text-2xl font-bold text-transparent bg-gradient-to-l from-blue-400 via-cyan-400 to-teal-400 bg-clip-text hover:from-blue-300 hover:via-cyan-300 hover:to-teal-300 transition-all duration-300 cursor-default">
                Study hard guys
              </p>
              <div className="flex items-center gap-2 mt-1 justify-end">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-500"></div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Vaise bhi kuch kaam ka nahi MU
                </span>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-teal-500"></div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          {/* Top row - Brand */}
          <div className="flex items-center justify-center gap-3 mr-10 group mb-4">
            <div className="relative">
              <Flame className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text hover:from-red-300 hover:via-pink-400 hover:to-purple-400 transition-all duration-300 cursor-default ">
                For Hot Peoples
              </h1>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="h-px w-4 bg-gradient-to-r from-red-500 to-transparent"></div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Premium Learning
                </span>
                <div className="h-px w-4 bg-gradient-to-l from-purple-500 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom row - Motivational message */}
          <div className="flex items-center justify-center gap-3 group">
            <div className="text-center">
              <p className="text-xl font-bold text-transparent bg-gradient-to-l from-blue-400 via-cyan-400 to-teal-400 bg-clip-text hover:from-blue-300 hover:via-cyan-300 hover:to-teal-300 transition-all duration-300 cursor-default">
                Study hard guys
              </p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="h-px w-4 bg-gradient-to-r from-transparent to-blue-500"></div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Vaise bhi kuch kaam ka nahi MU
                </span>
                <div className="h-px w-4 bg-gradient-to-l from-transparent to-teal-500"></div>
              </div>
            </div>
            <div className="relative">
             
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom accent bar */}
        <div className="mt-4 sm:mt-6 h-1 w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full opacity-80"></div>
        
        {/* Floating particles effect - adjusted for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 sm:top-6 left-6 sm:left-12 w-1 h-1 bg-red-400 rounded-full animate-ping delay-0"></div>
          <div className="absolute top-8 sm:top-12 right-12 sm:right-24 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-6 sm:bottom-8 left-1/4 sm:left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-4 sm:bottom-6 right-8 sm:right-12 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1500"></div>
        </div>
      </div>
    </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-[#1e1e1f] rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Sections</h2>
            <nav className="space-y-2">
              {majorSections.map((sec) => (
                <div key={sec.key}>
                  <button
                    onClick={() => {
                      setActiveSection(sec.key);
                      setActiveSubtopic(sec.subtopics[0].key);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeSection === sec.key
                        ? `${sec.color} text-gray-200`
                        : "text-gray-400 hover:bg-[#2a2a2b]"
                    }`}
                  >
                    {sec.icon}
                    <span className="font-medium">{sec.title}</span>
                  </button>
                  {activeSection === sec.key && (
                    <div className="ml-6 mt-2 space-y-1">
                      {sec.subtopics.map((sub) => (
                        <button
                          key={sub.key}
                          onClick={() => setActiveSubtopic(sub.key)}
                          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                            activeSubtopic === sub.key
                              ? "bg-blue-800 text-blue-200"
                              : "text-gray-400 hover:bg-[#2a2a2b]"
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>IP Syllabus</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-200 font-medium">{sectionData.title}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-200 font-medium">{subtopic.name}</span>
            </div>
          </div>
          <div className="bg-[#1e1e1f] rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-200">{subtopic.name}</h3>
            <div>{subtopic.content}</div>
          </div>
        </main>
      </div>

      <footer className="bg-[#1e1e1f] text-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            IP Learning Platform - Master Internet Programming Concepts Through
            Interactive Learning
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Practice, Learn, and Excel in your IP exam!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;