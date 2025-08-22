import MenuList from "./MenuList";



export default function Index({menus = []}){
    return (
        <div className="min-h-[100vh] w-[350px]" >
            <MenuList list={menus} />
        </div>
    )
}

