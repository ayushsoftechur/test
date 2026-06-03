import Link from "next/link"


export default function Navbar(){
    const Menu = [
        {name: "Home", link:"/"},
        {name:"About", link:"/about"},
        {name:"Text", link:"/text"},
        {name:"Contact", link:"/contact"}
    ]

    return (<>
            <div>
                <div className="max-w-7xl mx-auto py-2">
                    <div className="grid grid-cols-2">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold">Logo</h1>
                            </div>
                        </div>
                        <nav>
                            <div className="flex gap-5 justify-end">
                                {Menu.map((item) => (
                                <Link key={item.link} href={item.link} className="">
                                {item.name}</Link>
                            ))}
                            </div>
                        </nav>
                            
                        
                    </div>
                </div>
            </div>
    </>)
}