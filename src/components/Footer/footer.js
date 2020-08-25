import React from "react"
import styles from "./footer.module.css"
import IconControl from "../IconControl/iconControl"

const Footer = props => {
  return (
    <div className={styles.footerBackground}>
      <footer className={styles.footer}>
        <h2 className={styles.contact}>Let's talk 💬</h2>
        <h4 className={styles.description}>
          Hit me up at <a href="#">kenzo.nawa@gmail.com</a>
        </h4>
        <div className={styles.row}>
          <a href="https://www.linkedin.com/in/kenzonawa/" target="_blank">
            <h3 className={styles.link}>LINKEDIN</h3>
          </a>
          <span>&nbsp; / &nbsp;</span>
          <a href="https://medium.com/@kenzonawa" target="_blank">
            <h3 className={styles.link}>MEDIUM</h3>
          </a>
          <span>&nbsp; / &nbsp;</span>
          <a href="https://twitter.com/kenzo_nawa" target="_blank">
            <h3 className={styles.link}>TWITTER</h3>
          </a>

          {/* 
            <IconControl
              link="https://www.linkedin.com/in/kenzonawa/"
              label="LINKEDIN"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1036 990"
              >
                <path
                  fill=""
                  d="M0,115 C0,81.666 11.667,54.166 35,32.5 C58.333,10.833 88.667,0 126,0 C162.667,0 192.333,10.666 215,32 C238.333,54 250,82.666 250,118 C250,150 238.667,176.666 216,198 C192.667,220 162,231 124,231 L123,231 C86.333,231 56.667,220 34,198 C11.333,176 0,148.333 0,115 Z M13,990 L13,322 L235,322 L235,990 L13,990 Z M358,990 L580,990 L580,617 C580,593.666 582.667,575.666 588,563 C597.333,540.333 611.5,521.166 630.5,505.5 C649.5,489.833 673.333,482 702,482 C776.667,482 814,532.333 814,633 L814,990 L1036,990 L1036,607 C1036,508.333 1012.667,433.5 966,382.5 C919.333,331.5 857.667,306 781,306 C695,306 628,343 580,417 L580,419 L579,419 L580,417 L580,322 L358,322 C359.333,343.333 360,409.666 360,521 C360,632.333 359.333,788.666 358,990 Z"
                />
              </svg>
            </IconControl>
          </div>
          <div className={styles.icon}>
            <IconControl link="https://medium.com/@kenzonawa" label="Medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 87 72"
              >
                <path
                  fill=""
                  d="M80.1061836,64.2288439 L86.6630231,70.55873 L86.6630231,70.7687262 L53.4041224,70.7687262 L53.4041224,70.55873 L60.0796377,64.2288439 C60.7915689,63.643004 61.1324765,62.7122998 60.9697064,61.7988876 L60.9697064,21.3296161 C60.9697064,19.6196469 60.9697064,17.3096885 61.266396,15.3297241 L38.8366646,71.5787116 L38.569644,71.5787116 L15.3388507,19.8296431 C14.8344785,18.5396663 14.6861337,18.4496679 14.3597751,17.5796836 L14.3597751,51.5090729 C14.0816541,53.7799217 14.4630776,56.0835327 15.4575265,58.1389535 L24.803248,70.55873 L24.803248,70.7687262 L0,70.7687262 L0,70.55873 L9.34572142,58.1089541 C10.3328267,56.0618719 10.7140269,53.7700267 10.4434728,51.5090729 L10.4434728,14.0097479 C10.5954314,12.1633674 10.0434888,10.3281064 8.90068707,8.87984016 L2.28450968,0.20999622 L2.28450968,0 L26.0196752,0 L45.8978763,43.8292111 L63.4025609,0 L86.6333542,0 L86.6333542,0.20999622 L80.1061836,7.55986396 C79.3240288,8.13805946 78.9332348,9.11430576 79.0974391,10.0798186 L79.0974391,61.7988876 C78.9244564,62.7397905 79.3208565,63.6946755 80.1061836,64.2288439 Z"
                />
              </svg>
            </IconControl>
          </div>
          <div className={styles.icon}>
            <IconControl link="https://twitter.com/kenzo_nawa" label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 250 204"
              >
                <path
                  fill=""
                  d="M78.62,203.59 C172.96,203.59 224.56,125.43 224.56,57.65 C224.56,55.43 224.56,53.22 224.41,51.02 C234.448314,43.759109 243.113555,34.768794 250,24.47 C240.638791,28.618018 230.708293,31.338286 220.54,32.54 C231.24744,26.129821 239.261235,16.04772 243.09,4.17 C233.021575,10.144553 222.006461,14.35512 210.52,16.62 C194.620828,-0.2860572 169.357194,-4.4238742 148.895493,6.526799 C128.433792,17.477473 117.86275,40.793257 123.11,63.4 C81.868957,61.332495 43.444758,41.853233 17.4,9.81 C3.7862276,33.246447 10.7398788,63.228595 33.28,78.28 C25.117412,78.038075 17.1327937,75.836132 10,71.86 C10,72.07 10,72.29 10,72.51 C10.0066813,96.92593 27.217515,117.955352 51.15,122.79 C43.598696,124.8494 35.675806,125.150443 27.99,123.67 C34.709479,144.564228 53.965746,158.877839 75.91,159.29 C57.74735,173.564319 35.310595,181.313277 12.21,181.29 C8.1290357,181.282165 4.0520407,181.035075 0,180.55 C23.4563595,195.602766 50.749134,203.587169 78.62,203.55"
                />
              </svg>
            </IconControl>
            **/}
        </div>
      </footer>
    </div>
  )
}

export default Footer
