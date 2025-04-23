const Logout=()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('refresh')
}

export default Logout