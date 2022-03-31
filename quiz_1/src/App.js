import './App.css';
import Buttons from './components/Buttons';
import Value from './components/Value';
import Cube from './components/Cube';
import { useState } from "react";
import { useMouse } from "rooks";

function App() {
  const data = [{"id":4229,"uid":"ffce50c0-0995-47cd-bab7-217c9e8d1681","business_name":"Spencer Inc","suffix":"and Sons","industry":"Hospital \u0026 Health Care","catch_phrase":"Robust logistical challenge","buzzword":"Down-sized","bs_company_statement":"repurpose magnetic partnerships","employee_identification_number":"07-2119811","duns_number":"29-028-2641","logo":"https://pigment.github.io/fake-logos/logos/medium/color/3.png","type":"Nonprofit","phone_number":"+36 791-480-6262","full_address":"Apt. 308 1364 Gutmann Flats, Claudeport, WY 33833-7526","latitude":-60.827822447545174,"longitude":-117.88705464845415},{"id":906,"uid":"63b33b66-4bb8-426e-9b3e-e751d7f97ac3","business_name":"Johnston-Stokes","suffix":"and Sons","industry":"Fishery","catch_phrase":"Exclusive directional product","buzzword":"object-oriented","bs_company_statement":"benchmark sticky initiatives","employee_identification_number":"14-6361671","duns_number":"04-462-7679","logo":"https://pigment.github.io/fake-logos/logos/medium/color/1.png","type":"Privately Held","phone_number":"+54 1-481-613-7145","full_address":"706 Stoltenberg Parkway, New Newtonfort, OR 91698","latitude":8.098913788008133,"longitude":-160.86443589223376},{"id":1623,"uid":"a793eb3c-bfde-4ee6-8143-946679a338e8","business_name":"Swift-Ortiz","suffix":"LLC","industry":"Primary / Secondary Education","catch_phrase":"Programmable exuding software","buzzword":"Reverse-engineered","bs_company_statement":"transition dot-com functionalities","employee_identification_number":"17-4434578","duns_number":"80-367-6027","logo":"https://pigment.github.io/fake-logos/logos/medium/color/4.png","type":"Privately Held","phone_number":"+381 309.500.7084","full_address":"Apt. 339 2182 Quintin Rest, West Filiberto, MO 06193-8186","latitude":9.1590830656869,"longitude":145.10684459159813},{"id":4363,"uid":"ce74e4d4-f770-44e2-af6d-fa892065fbbd","business_name":"Parker Group","suffix":"Group","industry":"Luxury Goods \u0026 Jewelry","catch_phrase":"User-friendly tangible strategy","buzzword":"optimal","bs_company_statement":"extend impactful e-commerce","employee_identification_number":"13-0489746","duns_number":"29-014-0449","logo":"https://pigment.github.io/fake-logos/logos/medium/color/7.png","type":"Privately Held","phone_number":"+1-671 1-484-091-3869","full_address":"Suite 463 122 Pfeffer Club, Haywoodchester, VA 46210-4441","latitude":-56.31821333512967,"longitude":-80.78412526508384},{"id":6728,"uid":"7f582719-65be-482c-8dd2-86443751cb88","business_name":"Stanton-O'Connell","suffix":"LLC","industry":"Information Services","catch_phrase":"Monitored secondary encryption","buzzword":"throughput","bs_company_statement":"whiteboard real-time channels","employee_identification_number":"52-2856927","duns_number":"59-735-3711","logo":"https://pigment.github.io/fake-logos/logos/medium/color/3.png","type":"Self-Employed","phone_number":"+44 (656) 638-5168","full_address":"Apt. 930 984 Trey Light, Port Lannyberg, NH 40162-1192","latitude":39.02236425686627,"longitude":168.72539268917848}]

  const [ value, setValue ] = useState(data[0]["business_name"])
  return (
    <div className="App">
      <Value value={value}/>
      <Buttons buttonData={data} onClick={setValue}/>
      <button onClick={() => setValue(data[Math.floor(Math.random() * data.length)]['business_name'])}>Random</button>
      <Cube />
    </div>
  );
}

export default App;
