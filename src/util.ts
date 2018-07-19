
export function fetchAccessor(obj : any, accessor : string) {
    let i = accessor.indexOf('.');
    if(!obj) {
        return null;
    }
    if(i > -1) {
        return fetchAccessor(obj[accessor.substring(0, i)], accessor.substring(i + 1));
    }
    return obj[accessor];
}
