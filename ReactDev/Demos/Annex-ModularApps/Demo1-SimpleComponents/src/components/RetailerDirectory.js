import Retailer from './Retailer'

function RetailerDirectory({title, retailers}) {
    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>
            <div>
                {retailers.map((retailer, i) =>
                    <Retailer key={i} {...retailer} />
                )}
            </div>
        </div>
    )
}

RetailerDirectory.displayName = 'RetailerDirectory'

export default RetailerDirectory
