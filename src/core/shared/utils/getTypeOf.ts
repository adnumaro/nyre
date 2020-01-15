function getTypeOf(obj: any): string {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)![1];
}

export default getTypeOf;
