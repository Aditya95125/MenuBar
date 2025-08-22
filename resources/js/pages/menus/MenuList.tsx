import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
    return (
        <ul className="flex flex-row " > 
            {list && list.length > 0
                ? list.map((listItem) => 
                    <MenuItem item={listItem} />
                )
                : null}
        </ul>
    );
}
// flex flex-col space-x-6