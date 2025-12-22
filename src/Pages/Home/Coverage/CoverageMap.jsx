import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Truck } from 'lucide-react';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Container from '../../../Components/Container';

const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const dhakaLocations = [
    { id: 1, name: "Dhanmondi 27", lat: 23.7509, lng: 90.3733 },
    { id: 2, name: "Gulshan 2 Circle", lat: 23.7925, lng: 90.4162 },
    { id: 3, name: "Banani 11", lat: 23.7937, lng: 90.4066 },
    { id: 4, name: "Uttara Sector 7", lat: 23.8721, lng: 90.3907 },
    { id: 5, name: "Mirpur 10", lat: 23.8071, lng: 90.3686 },
    { id: 6, name: "Bashundhara R/A", lat: 23.8193, lng: 90.4326 },
    { id: 7, name: "Mohammadpur Town Hall", lat: 23.7598, lng: 90.3615 },
    { id: 8, name: "Farmgate", lat: 23.7561, lng: 90.3907 },
    { id: 9, name: "Motijheel C/A", lat: 23.7330, lng: 90.4172 },
    { id: 10, name: "Old Dhaka (Lalbagh)", lat: 23.7189, lng: 90.3881 },
    { id: 11, name: "Badda Link Road", lat: 23.7805, lng: 90.4267 },
    { id: 12, name: "Malibagh Railgate", lat: 23.7539, lng: 90.4137 },
    { id: 13, name: "Khilgaon Taltola", lat: 23.7516, lng: 90.4223 },
    { id: 14, name: "Tejgaon Industrial Area", lat: 23.7612, lng: 90.4001 },
    { id: 15, name: "Rampura Bridge", lat: 23.7615, lng: 90.4215 },
    { id: 16, name: "Nikunja 2", lat: 23.8322, lng: 90.4154 },
    { id: 17, name: "Purbachal Sector 1", lat: 23.8341, lng: 90.4900 },
    { id: 18, name: "Elephant Road", lat: 23.7391, lng: 90.3854 },
    { id: 19, name: "New Market", lat: 23.7334, lng: 90.3846 },
    { id: 20, name: "Azimpur Bus Stand", lat: 23.7298, lng: 90.3813 },
    { id: 21, name: "Shantinagar Market", lat: 23.7388, lng: 90.4135 },
    { id: 22, name: "Mogbazar", lat: 23.7490, lng: 90.4037 },
    { id: 23, name: "Hatirjheel (Moghbazar Side)", lat: 23.7554, lng: 90.4089 },
    { id: 24, name: "Karwan Bazar", lat: 23.7516, lng: 90.3943 },
    { id: 25, name: "Gabtoli Bus Terminal", lat: 23.7845, lng: 90.3424 },
    { id: 26, name: "Kalyanpur", lat: 23.7792, lng: 90.3547 },
    { id: 27, name: "Shyamoli Square", lat: 23.7719, lng: 90.3631 },
    { id: 28, name: "Agargaon", lat: 23.7766, lng: 90.3776 },
    { id: 29, name: "Pallabi Sector 12", lat: 23.8243, lng: 90.3644 },
    { id: 30, name: "Cantonment (Sainik Club)", lat: 23.8041, lng: 90.3957 },
    { id: 31, name: "Shewrapara", lat: 23.7915, lng: 90.3745 },
    { id: 32, name: "Kazipara", lat: 23.7984, lng: 90.3725 },
    { id: 33, name: "Mirpur 1", lat: 23.7956, lng: 90.3537 },
    { id: 34, name: "Mirpur 2 (Stadium)", lat: 23.8069, lng: 90.3619 },
    { id: 35, name: "Rayer Bazar", lat: 23.7431, lng: 90.3621 },
    { id: 36, name: "Hazaribagh", lat: 23.7344, lng: 90.3662 },
    { id: 37, name: "Jigatola", lat: 23.7411, lng: 90.3732 },
    { id: 38, name: "Shankar", lat: 23.7482, lng: 90.3681 },
    { id: 39, name: "Asad Gate", lat: 23.7571, lng: 90.3756 },
    { id: 40, name: "Bijoy Sarani", lat: 23.7663, lng: 90.3892 },
    { id: 41, name: "Eskaton Garden", lat: 23.7439, lng: 90.4005 },
    { id: 42, name: "Kakrail", lat: 23.7383, lng: 90.4079 },
    { id: 43, name: "Paltan", lat: 23.7314, lng: 90.4116 },
    { id: 44, name: "Shahbagh", lat: 23.7388, lng: 90.3946 },
    { id: 45, name: "BUET Campus", lat: 23.7265, lng: 90.3926 },
    { id: 46, name: "Kamalapur Railway Station", lat: 23.7329, lng: 90.4264 },
    { id: 47, name: "Sayedabad", lat: 23.7196, lng: 90.4323 },
    { id: 48, name: "Jatrabari", lat: 23.7099, lng: 90.4348 },
    { id: 49, name: "Demra", lat: 23.7115, lng: 90.4905 },
    { id: 50, name: "Wari", lat: 23.7184, lng: 90.4131 },
    { id: 51, name: "Sadarghat", lat: 23.7042, lng: 90.4104 },
    { id: 52, name: "Chalkbazar", lat: 23.7161, lng: 90.3958 },
    { id: 53, name: "Babu Bazar", lat: 23.7118, lng: 90.4012 },
    { id: 54, name: "Jurain", lat: 23.6934, lng: 90.4321 },
    { id: 55, name: "Postogola", lat: 23.6895, lng: 90.4357 },
    { id: 56, name: "Matuail", lat: 23.7041, lng: 90.4665 },
    { id: 57, name: "Basabo", lat: 23.7408, lng: 90.4312 },
    { id: 58, name: "Mandi Bagh", lat: 23.7471, lng: 90.4191 },
    { id: 59, name: "Aftabnagar", lat: 23.7667, lng: 90.4354 },
    { id: 60, name: "Baridhara DOHS", lat: 23.8123, lng: 90.4149 },
    { id: 61, name: "Kuril Biswa Road", lat: 23.8188, lng: 90.4206 },
    { id: 62, name: "Joar Sahara", lat: 23.8239, lng: 90.4217 },
    { id: 63, name: "Kalachandpur", lat: 23.8055, lng: 90.4198 },
    { id: 64, name: "Khilkhet", lat: 23.8298, lng: 90.4233 },
    { id: 65, name: "Uttara Sector 1", lat: 23.8617, lng: 90.3975 },
    { id: 66, name: "Uttara Sector 3", lat: 23.8659, lng: 90.3963 },
    { id: 67, name: "Uttara Sector 10", lat: 23.8821, lng: 90.3855 },
    { id: 68, name: "Abdullahpur", lat: 23.8917, lng: 90.3989 },
    { id: 69, name: "Diabari", lat: 23.8839, lng: 90.3626 },
    { id: 70, name: "Turag", lat: 23.9015, lng: 90.3721 },
    { id: 71, name: "Bosila", lat: 23.7501, lng: 90.3441 },
    { id: 72, name: "Mohakhali Wireless", lat: 23.7799, lng: 90.4048 },
    { id: 73, name: "Godaile", lat: 23.7911, lng: 90.4332 },
    { id: 74, name: "Green Road", lat: 23.7489, lng: 90.3861 },
    { id: 75, name: "Panthapath", lat: 23.7511, lng: 90.3842 }
];

const CoverageMap = () => {
    const dhakaCenter = [23.8103, 90.4125];

    return (
        <div  >
            <div className=" mx-auto px-4 py-15">

                {/* Section Header */}
                <div className="text-center mb-12 py-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                        <Truck size={18} />
                        <span>Fast Delivery Across Dhaka</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Our Service Coverage</h2>
                    <p className="text-neutral/60 max-w-2xl mx-auto italic">
                        We deliver your favorite books to over 50+ key points in the city.
                        Find the nearest delivery hub near you!
                    </p>
                </div>

                {/* Map Container */}
                <div className="rounded-3xl  overflow-hidden shadow-xl border-8 border-base-100 h-[500px] relative z-0">
                    <MapContainer
                        center={dhakaCenter}
                        zoom={12}
                        scrollWheelZoom={false}
                        className="h-full w-full"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {dhakaLocations.map((loc) => (
                            <Marker
                                key={loc.id}
                                position={[loc.lat, loc.lng]}
                                icon={customIcon}
                            >
                                <Popup>
                                    <div className="text-center p-1">
                                        <h4 className="font-bold text-primary">{loc.name}</h4>
                                        <p className="text-[10px] m-0">Delivery within 24 Hours</p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                {/* Map Stats */}
                <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 my-10 py-10  ">
                    {[
                        { label: "Active Hubs", val: "50+" },
                        { label: "Delivery Time", val: "24h" },
                        { label: "Riders", val: "100+" },
                        { label: "Satisfaction", val: "99%" },
                    ].map((stat, i) => (
                        <div key={i} className=" bg-base-100 p-6 rounded-2xl text-center shadow-lg">
                            <p className="text-3xl font-black text-primary">{stat.val}</p>
                            <p className="text-xs uppercase font-bold opacity-50 tracking-tighter">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoverageMap;