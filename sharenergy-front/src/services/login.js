export const persist = (p, userName, password)=> {
    if(p){
        localStorage.setItem('userData',JSON.stringify(
          {
            userName,
            password
          }     
        ))
      } else {
        localStorage.removeItem('userData')
      }
}
