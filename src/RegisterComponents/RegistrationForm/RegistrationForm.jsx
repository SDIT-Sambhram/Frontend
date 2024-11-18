import './RegistrationForm.css'
import { StoreContext } from '../../Contexts/StoreContext';
import { useContext } from 'react';

const RegistrationForm = () => {
    const collegeNames = [
        "Other",
        "ACS College of Engineering",
        "Acharya's N R V School of Architecture",
        "Advanced Management College",
        "Alva's Institute of Engineering and Technology",
        "Bearys Institute of Technology",
        "Bharathi College of Pharmacy",
        "B.L.D.E.A's V.P. Dr. P.G. Halakatti College of Engineering & Technology",
        "BMS Institute of Technology & Management",
        "Cambridge Institute of Technology",
        "Canara Engineering College (CE)",
        "City College",
        "Dayananda Sagar College of Arts, Science & Commerce",
        "Dayananda Sagar College of Engineering",
        "Dayananda Sagar College of Pharmacy",
        "Dr. Ambedkar Institute of Technology",
        "Dr. H.L. Thimmegowda College of Pharmacy",
        "Dr. M.V. Shetty Institute of Technology",
        "Dr. Sri Sri Sri Shivakumara Mahaswamy College of Engineering",
        "Dr. T.M.A. Pai Polytechnic (TMAP Polytechnic)",
        "East West Institute of Technology",
        "Gautham College of Pharmacy",
        "Ghousia College of Engineering",
        "Global Academy of Technology",
        "Government Polytechnic for Women, Karkala (GPFW, Karkala)",
        "Government Polytechnic, Bajpe (GP, Bajpe)",
        "Government Polytechnic, Ujire (GP, Ujire)",
        "Guru Nanak Dev Engineering College",
        "HKBK College of Engineering",
        "Impact Polytechnic",
        "Indira Shiva Rao Polytechnic, Udupi",
        "Institute of Finance & International Management",
        "JSS Academy of Technical Education",
        "JSS College of Pharmacy",
        "Jawaharlal Nehru National College of Engineering",
        "K.L.E. Society's College of Engineering & Technology",
        "K.L.S. Gogte Institute of Technology",
        "Karavali Institute of Technology",
        "Karavali College of Pharmacy",
        "KVG Engineering College",
        "K.V. Gowda Polytechnic (KVG Polytechnic)",
        "Manglore Marine College and Technology",
        "Mangalore Institute of Technology & Engineering (MITE)",
        "Manipal Institute of Technology (MIT)",
        "M.S. Ramaiah Institute of Technology",
        "M.S. Ramaiah College of Pharmacy",
        "Nargund College of Pharmacy",
        "National Institute of Technology Karnataka (NITK)",
        "Nitte Meenakshi Institute of Technology",
        "NRAMP, Nitte",
        "Oxford Business School",
        "PA college of Engineering,(PACE)",
        "PES College of Pharmacy",
        "R.L. Jalappa Institute of Technology",
        "Rajarajeswari College of Engineering",
        "Rajeev Institute of Technology",
        "Reva Institute of Science and Management",
        "Reva Institute of Technology and Management",
        "RNS Institute of Technology",
        "Rural Engineering College",
        "Sahyadri College of Engineering & Management (SCE)",
        "SBRR Mahajana First Grade College",
        "S.E.T's College of Pharmacy",
        "SDM College of Business Management Post Graduate Centre",
        "SDM College of Engineering & Technology (SDMC)",
        "Shri Madhwa Vadiraja Institute of Technology & Management (SMVIT)",
        "Shree Devi Institute of Engineering & Technology",
        "Siddaganga Institute of Technology",
        "SJEC - St. Joseph Engineering College",
        "SJB Institute of Technology",
        "Sri Dharmasthala Manjunatheshwara Polytechnic (SDMP, Ujire)",
        "Sri Revana Siddeshwara Institute of Technology",
        "Srinivas Institute of Technology (SIT)",
        "Sri Krishna School of Engineering & Management",
        "Sri Taralabalu Jagadguru Institute of Technology",
        "Vemana Institute of Technology",
        "Vivekananda College of Engineering & Technology",
        "Vivekananda Polytechnic (VC Polytechnic)",
        "Yenepoya Institute of Technology (YIT)",
    ];


    const { data, setData } = useContext(StoreContext)
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }


    return (
        <div className="registration-form-div">

            <form action="" className='registration-form'>
                <h2>ENTER YOUR DETAILS</h2>
<p className='team-event-warning'><i className="fa-solid fa-circle-exclamation">&nbsp;&nbsp;</i>For team events, all team members must register individually.</p>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter USN"
                    name="usn"
                    onChange={onChangeHandler}
                    value={data.usn}
                    required
                />
                <select
                    name="college"
                    onChange={onChangeHandler}
                    value={data.college}
                    required
                >
                    <option value="" disabled>Select College</option>
                    {collegeNames.map((college, index) => (
                        <option key={index} value={college}>{college}</option>
                    ))}
                </select>
                {
                    data.college=="Other"?<input
                    type="text"
                    placeholder="Enter College Name"
                    name="Othercollege"
                    onChange={onChangeHandler}
                    value={data.Othercollege}
                    required
                />:<>
                </>
                }
                
                <input
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    name="mobile"
                    onChange={onChangeHandler}
                    value={data.mobile}
                    required
                />
            </form>
           

        </div>
    )


}

export default RegistrationForm;