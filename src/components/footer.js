import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="laroute-container-xl h-100">
        <div className="d-flex justify-content-sm-between justify-content-center align-items-center h-100 flex-wrap flex-sm-nowrap">
          <div className="h-100 d-flex align-items-center left-part">
            <div className="link-footer">
              <Link to="/mentions">
                Mentions Légales
              </Link>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="margin-footer-right">
              <p>
                Mail : laroute33@laroute.fr
              </p>
              <p>
                Tel : 06 - 00 - 11 - 22 - 33
              </p>
            </div>

            <div className="">
              <p>
                <strong>La Route</strong>
              </p>
              <p>
                3 rue Charles Nungesser
              </p>
              <p>
                33292 Blanquefort
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
