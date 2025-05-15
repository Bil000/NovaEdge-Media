export default function TrustedPartners () {
    return (
    <section className="W-full">
        <div className="flex flex-col items-center justify-center w-full h-full py-10">
            <h2 className="text-3xl font-bold mb-4">Trusted Partners</h2>
            <p className="text-lg mb-6">We work with the best in the industry</p>
            <div className="flex flex-wrap flex-col max-w-lg justify-center">
                <a href="https://zentecglobal.com.au/"><img src="/zentec_globo.png" alt="zentec_global logo" className="max-w-lg " /></a>
                <h3 className="text-xl font-semibold">Zentec Global</h3>
                {/* Add more partner logos as needed */}
            </div>
        </div>
    </section> )
}