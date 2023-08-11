import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Articles from "../pages/Articles";
import NavBar from "../components/NavBar";
import Sales from "../pages/Sales";
import ConsultSales from "../pages/ConsultSales";
import Quotation from "../pages/Quotation";
import ConsultQuotation from "../pages/ConsultQuotation";
import Auth from "../pages/Auth";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas que no requieren NavBar */}
        <Route path="/" element={<Auth />} />

        {/* Rutas con NavBar */}
        <Route
          path="/home"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/articles"
          element={
            <>
              <NavBar />
              <Articles />
            </>
          }
        />
        <Route
          path="/sales"
          element={
            <>
              <NavBar />
              <Sales />
            </>
          }
        />
        <Route
          path="/consultsales"
          element={
            <>
              <NavBar />
              <ConsultSales />
            </>
          }
        />
        <Route
          path="/quotation"
          element={
            <>
              <NavBar />
              <Quotation />
            </>
          }
        />
        <Route
          path="/consultquotation"
          element={
            <>
              <NavBar />
              <ConsultQuotation />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
