export function collectRoutePathsFromTree(routeTree) {
  const paths = [];
  function walk(node) {
    if (!node) return;
    if (node.path) {
      paths.push(node.path);
    }
    if (node.children) {
      for (const child of node.children) {
        walk(child);
      }
    }
  }
  walk(routeTree);
  return paths;
}

export function installPreviewHostBridge(options) {
  if (typeof window === "undefined") return () => {};
  
  const handleMessage = (event) => {
    if (event.data && event.data.type === "PREVIEW_NAVIGATE") {
      if (options && typeof options.navigate === "function") {
        options.navigate(event.data.path);
      }
    }
  };

  window.addEventListener("message", handleMessage);
  return () => {
    window.removeEventListener("message", handleMessage);
  };
}