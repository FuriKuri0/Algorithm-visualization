import defaultProps from "../../pages/Home/defaultProps";

const list:Array<{path:string,name:string}> = []
defaultProps.route.routes.map((v)=>{
    v.routes.map(vv=>{
        list.push(vv)
    })
})
export default list