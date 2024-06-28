import React from "react";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div id="training">
      <div className="training__content">
        <h2>Təlimlər, tədbir və elanlar</h2>
        <p>
          Təlimlərimizdən xəbərdar olmaq, tədbirlərimizdə iştirak etmək üçün
          səhifəyə keçid edin. Qeydiyyatdan keçərək bizə qoşula və komandamızın
          bir parçasına çevrilə bilərsiniz.
        </p>
          <Link className="training__btn" to='/traningpages'>Ətraflı</Link>
      </div>
    </div>
  );
};

export default Training;
