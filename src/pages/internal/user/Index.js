import React from "react";
import { useState, useEffect } from "react";
import SimpleContainer from "../../../components/containers/SimpleContainer";
import ThemeButton from "../../../components/buttons/ThemeButton";
import UpdateForm from "./UpdateForm";
import { map } from "jquery";
import CreateForm from "./CreateForm";
import DeleteForm from "./DeleteForm";
const Index = () => {
  const [userLists, setUserLists] = useState([]);
  const [userData, setUserData] = useState([]);
  const [enableSubmit, setEnableSubmit] = useState(false);

  const userDataAPI = "https://darkshots.onrender.com/api/users/";
  const signoutUserAPI = "https://darkshots.onrender.com/api/user/logout";
  const tableHeaders = [
    {
      id: 1,
      name: "Name",
    },
    {
      id: 2,
      name: "Contact / Email",
    },
    {
      id: 3,
      name: "Username",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(userDataAPI, {
          method: "get",
          credentials: "include",
        })
          .then(async (response) => {
            if (response.status == 200) {
              const data = await response.json();
              setUserLists(data);
            }
          })
          .catch((error) => console.log({ error: error.message }));
      } catch (error) {
        console.log({ message: error.message });
      }
    };

    fetchData();
  });
  return (
    <>
      <SimpleContainer
        rightSection={
          <div className="float-end">
            <ThemeButton
              enableModal={true}
              modalName="newUser"
              modalHeader="Details"
              modalBody={<CreateForm />}
              modalCloseButtonText="back"
              enableTheme={false}
              textName={
                <span>
                  <i class="ri-add-fill"></i>New
                </span>
              }
            />
          </div>
        }
        mainSection={
          <table className="table table-responsive table-bordered">
            <thead>
              <tr>
                {tableHeaders.map((element) => {
                  return <th key={element.id}>{element.name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {userLists.map((element) => {
                return (
                  <tr key={element._id}>
                    <td>{element.fullName}</td>
                    <td>{element.contact}</td>
                    <td>{element.username}</td>

                    <td width={150} align="middle">
                      <ThemeButton
                        enableModal={true}
                        modalName="editUser"
                        modalHeader="Details"
                        modalBody={<UpdateForm data={userData} />}
                        modalCloseButtonText="back"
                        enableTheme={false}
                        clickTrigger={() => setUserData(element)}
                        textName={<i className="ri-pencil-line"></i>}
                      />
                      <ThemeButton
                        enableModal={true}
                        modalName="deleteUser"
                        modalHeader="Details"
                        modalBody={<DeleteForm data={userData} />}
                        modalCloseButtonText="back"
                        enableTheme={false}
                        clickTrigger={() => setUserData(element)}
                        textName={<i className="ri-delete-bin-fill"></i>}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      />
    </>
  );
};
export default Index;
