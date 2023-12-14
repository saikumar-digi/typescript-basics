const score : Array<number> = []

const names: Array<string> = []

function identity1(arg: number): number {
    return arg;
  }

  function identity2(arg: any): any {
    return arg;
  }

  function identity3<Type>(arg: Type): Type {
    return arg;
  }
  function identity4<T>(arg: T): T {
    return arg;
  }


  function getSerachProducts<T>(products: T[]):T{
    return products[3]
  }

 const getMoreProducts = <T,>(products: T[]):T =>{
    const myIndex = 2
      return products[myIndex]
 }

