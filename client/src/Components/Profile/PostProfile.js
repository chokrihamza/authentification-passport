import React,{ useState }  from 'react'
import { useDispatch } from 'react-redux';
import { postProfile } from '../../js/actions/actionprofile';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './PostProfile.css'
const PostProfile = () => {
  
  const [location, setLocation] = useState();
  const [adresse, setAdresse] = useState();
  const [farmerDomaine, setFarmerDomaine] = useState();
 const [image, setImage] = useState();
  const dispatch = useDispatch()
  const data = new FormData();
    data.append("location", location);
    data.append("adresse", adresse);
    data.append("farmerDomaine", farmerDomaine);
  data.append("image", image);

  console.log(image)
  return (
    <>
    
      <div className="registration-form">
        <form>
          <div className="form-icon">
          {(image)?
              (<img src={URL.createObjectURL(image)} className="form-icon" />)
              : <span><i className="icon icon-user" /></span>}
            
          </div>
        
          <div className="file-upload"
            style={{ display: "flex", justifyContent: "center" }} >
           
            <input 
              style={{ color: "red", textAlign: "center" }}
           
           type="file"
           id="file"
           accept="png"
           onChange={event => {
             const file = event.target.files[0];
          
             setImage(file);
            
           }}
         />
        </div>
          <label htmlFor="name">Location</label>
          <Input type="select" name="select" id="exampleSelect"
            onChange={e => {
                
              setLocation(e.target.value);
            }}>
              <option>Ariana</option>
              <option>Béja</option>
              <option>Ben Arous</option>
              <option>Bizerte</option>
              <option>Gabès</option>
              <option>Gafsa</option>
              <option>Jendouba</option>
              <option>Kairouan</option>
              <option>Kasserine</option>
              <option>Kebili</option>
              <option>Kef</option>
              <option>Manouba</option>
              <option>Medenine</option>
              <option>Monastir</option>
              <option>Nabeul</option>
              <option>Sfax</option>
              <option>Sidi Bouzid</option>
              <option>Siliana</option>
              <option>Sousse</option>
              <option>Tataouine</option>
              <option>Tozeur</option>
              <option>Tunis</option>
              <option>Ariana</option>
              <option>Zaghouan</option>
              

          
        </Input>
           
         
          <div className="form-group">
            <input type="text" className="form-control item" id="adresse" placeholder="adresse"
            onChange={e => {
                
              setAdresse(e.target.value);
            }}
            />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item"  id="farmerDomaine" placeholder="farmerDomaine"
            onChange={e => {
                
              setFarmerDomaine(e.target.value);
            }}
            />
          
            <button type="button" className="btn btn-block create-account"
            onClick={()=>dispatch(postProfile(data))}
            >Submit Profile</button>
          </div>
        </form>
       
      </div>
</>
    
  )
}

export default PostProfile

