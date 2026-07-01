export function addVisitor(name, host){
  return {name, host, checkedInAt: new Date().toISOString()};
}

console.log("Source module loaded");
