export default function StaffCard({className, image, name, role, email}) {
    let fixedClassName = className + ' flex flex-col items-center text-center'

    return (
        <div className={ fixedClassName }>
            <div className="w-20 h-20 bg-gray-100 rounded-full">
                <img className="object-cover w-20 h-20 border rounded-full" src={ image } />
            </div>

            <p className="mt-4 font-bold">{ name }</p>
            <p className="text-sm">{ role }</p>
            <p className="text-sm">{ email }</p>
        </div>
    );
}