import React from "react";
import Cow from "./picture/cow.jpeg";
import Cat from "./picture/cat.jpg";
// import Dog from "./picture/dog.jpg";
import Elephant from "./picture/elephant.jpg";
import Panda from "./picture/panda.jpg";
import Tiger from "./picture/tiger.jpg";
// import Girraff from "./picture/girraff.jpg";
import Girraff2 from "./picture/girraff2.jpg";
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
// import { AlignHorizontalLeft } from "@mui/icons-material";
// import { alignProperty } from "@mui/material/styles/cssUtils";
// import { textAlign } from "@mui/system";

export const Card = () => {
  return (
    <>
     <h4 class="myfont my-5" style={{color:"black",textAlign:"left"}}><FormatListBulletedRoundedIcon/>Few are Baby animals</h4>
      <div className="container-fluid">
        <div className="row">
          <div className="'col-md-4 col-10 col-xxl-4 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                   src={Cow}
                    className="img-fluid container-fluid rounded-start"
                    alt="cow"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Baby Cow</h5>
                    <p className="card-text">
                    There are lots of different kinds of animals living on earth. That means that there lots of very different kinds of baby animals! Even though we usually think of babies as being small and helpless when they are first born, that isn’t true for all animals. Some animals are very large even when they’re first born.
                <PetsRoundedIcon/>
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="'col-md-4 col-10 col-xxl-4 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={Elephant}
                    className="img-fluid rounded-start"
                    alt="mountains"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Baby Elephant</h5>
                    <p className="card-text">
                    There are lots of different kinds of animals living on earth. That means that there lots of very different kinds of baby animals! Even though we usually think of babies as being small and helpless when they are first born, that isn’t true for all animals. Some animals are very large even when they’re first born.
                    <PetsRoundedIcon/>
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="'col-md-4 col-10 col-xxl-4 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={Cat}
                    className="img-fluid rounded-start"
                    alt="mountains"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Baby Cat</h5>
                    <p className="card-text">
                    There are lots of different kinds of animals living on earth. That means that there lots of very different kinds of baby animals! Even though we usually think of babies as being small and helpless when they are first born, that isn’t true for all animals. Some animals are very large even when they’re first born.
                    <PetsRoundedIcon/>
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="'col-md-4 col-10 col-xxl-4 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={Tiger}
                    className="img-fluid rounded-start"
                    alt="mountains"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Baby Tiger</h5>
                    <p className="card-text">
                    There are lots of different kinds of animals living on earth. That means that there lots of very different kinds of baby animals! Even though we usually think of babies as being small and helpless when they are first born, that isn’t true for all animals. Some animals are very large even when they’re first born.
                    <PetsRoundedIcon/>
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="'col-md-4 col-10 col-xxl-4 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={Girraff2}
                    className="img-fluid rounded-start"
                    alt="mountains"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Baby Girraff</h5>
                    <p className="card-text">
                     There are lots of different kinds of animals living on earth. That means that there lots of very different kinds of baby animals! Even though we usually think of babies as being small and helpless when they are first born, that isn’t true for all animals. Some animals are very large even when they’re first born.
                    <PetsRoundedIcon/>
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="'col-md-4 col-10 col-xxl-4 mx-auto">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={Panda}
                    className="img-fluid rounded-start"
                    alt="mountains"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Baby Panda</h5>
                    <p className="card-text">
                     There are lots of different kinds of animals living on earth. That means that there lots of very different kinds of baby animals! Even though we usually think of babies as being small and helpless when they are first born, that isn’t true for all animals. Some animals are very large even when they’re first born.
                    <PetsRoundedIcon/>
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
