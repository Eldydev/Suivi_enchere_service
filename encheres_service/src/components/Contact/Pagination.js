import React from "react";
import ReactNextPaging from "react-next-paging";
import { useLocation, Link } from "react-router-dom";

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "1em",
  padding: 10,
  margin: 5,
  width: 70
};

const PaginacionTabla = ({ itemsperpage, nocolumns, items, pagesspan }) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled
      }) => (
        <tbody>
          {items.slice(initialitem, lastitem).map((contact, index) => {

              
            return (
                <tr key={index}>
                <td>{contact.id}</td>    
                <td>{contact.First_Name}</td>
                <td>{contact.Last_Name}</td>
                <td>{contact.Email}</td>
                <td>{contact.Phone}</td>
                <td>
                    <select>
                        <option value="attente_paiement">attente paiement</option>
                        <option value="payé">payé</option>
                    </select>
                </td>
                <td>
                <Link
                  to={{
                    pathname: `/view-contact-details/${contact.id}`,
                    state: { users: contact }
                  }}
                >
                  <button>View</button>
                </Link>
                </td>
              </tr>
            );
          })}
          {noitems > 0
            ? [
                <tr key={"pagingrow" + 100}>
                  <td colSpan={nocolumns} style={{ textAlign: "center" }}>
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {"<<"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {"<"}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map(page => {
                      return (
                        <button
                          key={page}
                          {...getSelPageButtonProps({ page: page })}
                          disabled={currentpage == page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      {">"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {">>"}
                    </button>
                  </td>
                </tr>
              ]
            : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};

export default PaginacionTabla;
