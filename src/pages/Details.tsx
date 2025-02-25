import { useEffect, useState } from "react";
import { useNavigate, useParams,NavLink } from "react-router-dom";

interface PhoneType {
  id: string;
  name: string;
  description: string;
  price: number;
  status: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
}
function Details() {
  let [phone, setPhone] = useState<PhoneType>();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id) {
      fetch(`https://auth-rg69.onrender.com/api/products/${params.id}`).then(
        (res) =>
          res
            .json()
            .then((data) => {
              setPhone(data);
            })
            .catch((err) => {
              console.log(err);
            })
      );
    } else {
      navigate("/");
    }
  }, []);
  console.log(phone);

  return (<>
    
    <div className="w-1/4 mx-auto text-[grey] mt-8">
    <NavLink to='/' className='bg-[blue] text-white py-2 px-4 rounded-lg w-1/4 '>Chiqish</NavLink>
      {phone ? (
        <div className="mt-8">
          <h2>{phone.name}</h2>
          <p>Description: {phone.description}</p>
          <p>Price: ${phone.price}</p>
          <p>Status: {phone.status}</p>
          <p>Category ID: {phone.category_id}</p>
          <p>Created At: {phone.createdAt}</p>
          <p>Updated At: {phone.updatedAt}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}

export default Details;
