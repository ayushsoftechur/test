import Image from "next/image";

export default function Categories(){
    
    const Card = [
        {img:"/image/test.jpg", heading: "Wood", paragraph: "lorem lorem lorem lorem lorem"},
        {img:"/image/test.jpg", heading: "Wood", paragraph: "lorem lorem lorem lorem lorem"},
        {img:"/image/test.jpg", heading: "Wood", paragraph: "lorem lorem lorem lorem lorem"},
    ] 

    return (<>
        <div>
            <p className="text-blue-700">Explore ayush softasdech chor</p>
            <h2 className="text-blue-300 text-4xl font-bold">Featured Categories</h2>
            <div className="flex gap-5">
            {Card.map(item=>(
                <div key={item.heading} className="bg-white border border-gray-500 rounded-2xl p-10 ">
                    <div className="flex">
                        <div>
                            <Image src={item.img} alt="home" height={200} width={150}/>
                        </div>
                        <div>
                            <h5 className="text-2xl font-semibold">{item.heading}</h5>
                            <p className="text-gray-500 mt-10">{item.paragraph}</p>
                            
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </>);
}