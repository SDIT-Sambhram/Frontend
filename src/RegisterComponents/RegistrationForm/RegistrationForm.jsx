import './RegistrationForm.css'
import { StoreContext } from '../../Contexts/StoreContext';
import { useContext } from 'react';

const RegistrationForm = () => {
    const collegeNames = [
        "Brindavan College of Engg.Bengaluru Urban",
        "LINGARAJ APPA ENGINEERING",
        "Govt. Engineering College, Ballari",
        "P A College of Engineering, MANGALORE",
        "BASAV ENGINEERING SCHOOL OF",
        "Dr. Sri Sri Sri Shivakumara Mahaswamy",
        "SDM Institute of Technology, UJIRE",
        "BILURU GURUBASAVA MAHASWAMIJI",
        "Appa Institute of Engineering & Technology",
        "P D A College of Engineering",
        "MYSORE SCHOOL OF ARCHITECTURE",
        "Govt. Engineering College, Dakshin Kannad",
        "Sri Sairam College of Engineering",
        "Akshaya Institute of Technology",
        "Sri Basaveshwara Institute of",
        "Gopalan College of Engineering &",
        "Jain Acharya Gundharnandi Maharaj",
        "JAIN COLLEGE OF ENGINEERING",
        "Nitte School of Architecture",
        "B T L Institute of Technology Management",
        "MANGALORE MARINE COLLEGE AND",
        "Dayananda Sagar College of",
        "Government Engineering College Hassan",
        "East West Institute of Technology",
        "Dr. Timmaiah Institute of Technology, K Kolar",
        "Maharaja Institute of Tech.",
        "Smt. Kamala & Sri Venkappa M Agadi",
        "Mysore college of Engineering",
        "Ballari Institute of Technology &",
        "P E S College of Engineering",
        "New Horizon College of Engineering",
        "Govt. Engineering College, Hassan",
        "J N N College of Engineering",
        "T. John Institute of Technology",
        "Jnana Vikas Institute of Technology",
        "Bangalore Technological Institute",
        "Govt. Engineering College, Ramanagara",
        "KLEs College of Engineering & Technology",
        "The Oxford College of Engineering",
        "J S S Academy of Technical Education",
        "City Engineering College",
        "JAIN COLLEGE OF ENGINEERING",
        "Vivekananda Institute of Technology",
        "APS College of Engineering",
        "National Institute of Engineering",
        "Govt. Engineering College, Mandya",
        "SHETTY INSTITUTE OF TECHNOLOGY",
        "ST JOSEPH ENGINEERING COLLEGE",
        "BMS College of Engineering",
        "H M S Institute of Technology, TUMKUR",
        "N M A M Institute of Technology",
    ];


    const { data, setData, sendDatatoBackend } = useContext(StoreContext)
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className="registration-form-div">

            <form action="" className='registration-form'>
                <h2>ENTER YOUR DETAILS</h2>

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
                <input
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    name="mobile"
                    onChange={onChangeHandler}
                    value={data.mobile}
                    required
                />

                {/* <div><i className="fa-solid fa-circle-info fa-lg" style={{ color: "#ff0000" }}></i>
                <p>OTP will be sent to your registered phone number for verification.</p></div> */}
            </form>
            {/* <button className="continue-button" onClick={sendDatatoBackend}>send data</button> */}

        </div>
    )


}

export default RegistrationForm;