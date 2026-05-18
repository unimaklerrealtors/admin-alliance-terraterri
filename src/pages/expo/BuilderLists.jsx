import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Loader from '../../components/Loader';

const BuilderLists = () => {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    return (
         // {loading && <Loader/>}
         <div className="main-content">
         <div className="page-content">
           <div className="container-fluid">
             <div className="row">
               <div className="col-12">
                 <div className="page-title-box d-flex align-items-center justify-content-between">
                   <div className="page-title-right">
                     <ol className="breadcrumb m-0">
                       <li className="breadcrumb-item">
                         <a href="/">Home</a>
                       </li>
                       <li className="breadcrumb-item active">Builders Lists</li>
                     </ol>
                   </div>
                   {/* <div className="page-title-right">
                     <button className="btn btn-info">Add States</button>
                   </div> */}
                 </div>
               </div>
             </div>


             <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Builder List</h3>
               
              </div>
              <div className="card-body">
                <div className="table-responsive-md">
                         <table className="table text-nowrap mb-0">
                     <thead>
                          <tr>
                          <th>ID</th>
                          <th>Builder ID</th>
                          <th>State</th>
                          <th>City</th>
                          <th>Address</th>
                          <th>Contact person (CP)</th>
                          <th>CP Phone Number</th>
                          <th>Action</th>
                     
                          </tr>
                          </thead>  
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>1</td>
                          <td>Telanga</td>
                          <td>Hyderabad</td>
                          <td width={350}>#802 Door no: 6-3-352/2&3, Astral Heights, Road No.1, Banjara Hills, Hyderabad - 500 034.</td>
                          <td>Aparna Constructions</td>
                          <td>7997823335</td>
                          <td>1</td>
                         
                        </tr>
                       
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>

          
        
           </div>
         </div>
  
         <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
           
          </Modal.Header>
         
          <div className='popup'>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Stall Visitors</h3>
                 
                </div>
                <div className="card-body">
                  <div className="table-responsive-md">
                    <table className="table text-nowrap mb-0">
                      <thead>
                        <tr>
                          
                          <th>S.no</th>
                          <th>Visitor Name</th>
                          <th>Mobile Number</th>
                          <th>Email Id</th>
                          <th>Excutive</th>
                          <th>Activity</th>
                         
  
                        </tr>
                      </thead>
                      <tbody>
                     <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                     <tr>
                      <td>2</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                   
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

  </div>
        </Modal>
       </div>
    )
}

export default BuilderLists