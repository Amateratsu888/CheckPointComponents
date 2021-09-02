import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'


function App() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
    <div className="card p-3">
        <div className="d-flex align-items-center">
            <div className="image"> <ProfilePhoto/></div>
            <div className="ml-3 w-100">
                <FullName/> <Address/>                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column"> <span className="articles">Records</span> <span className="number1">38</span> </div>
                    <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">980</span> </div>
                    <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                </div>
                <div className="button mt-2 d-flex flex-row align-items-center justify-content-between"> <button className="btn btn-sm btn-outline-primary w-99">Chat</button> <button class="btn btn-sm btn-primary w-99 ">Follow</button> </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default App;
