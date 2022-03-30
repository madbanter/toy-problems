// https://otcatchup.util.repl.co/
function isValid(stale, latest, otjson) {
  let ops = JSON.parse(otjson);
  let pos = 0;
  for (let step of ops) {
    switch (step.op) {
      case 'skip':
        pos += step.count;
        if (pos > stale.length) {
          return false;
        }
        break;
      case 'insert':
        stale = stale.slice(0, pos) + step.chars + stale.slice(pos);
        pos += step.chars.length;
        break;
      case 'delete':
        if (pos + step.count > stale.length) {
          return false;
        }
        stale = stale.slice(0, pos) + stale.slice(pos + step.count);
        break;
      default:
        throw new Error("Invalid op specified. Op must be 'skip', 'delete', or 'insert'.");
    }
  }
  return stale === latest;
}
