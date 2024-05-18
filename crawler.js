const puppeteer = require("puppeteer-extra");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(stealthPlugin());
const fs = require("fs").promises;
const path = require("path");

class BrowserManager {
  constructor() {
    this.browser = null;
  }

  async initializeBrowser() {
    this.browser = await puppeteer.launch({ headless: true });
    console.log("Browser initialized");
  }

  async createNewPage() {
    if (!this.browser) {
      await this.initializeBrowser();
    }
    return await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

const browserManager = new BrowserManager();

const url =
  "https://www.ubereats.com/ca-fr/store/po-poulet-montreal-nord/hZzpEuQTUh-IvKpaaOuRAA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJvdWxhbmdlcmllJTIwJTI2JTIwVmllbm5vaXNlcmllJTIwQWxtYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmVlYmI0ZjlhLWRiYjUtNTJmNy00NTNmLTE2ODAyZThmNDg1OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDUuNTg2NzElMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNjIwNjYlN0Q%3D&ps=1";

module.exports.getProduct = async () => {
  let page;

  try {
    page = await browserManager.createNewPage();
    console.log("Page created");

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    );

    await page.goto(url, {
      timeout: 60000,
    });

    console.log("Page loaded");

    // Simulate scrolling down to load all content
    await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
        let totalHeight = 0;
        let distance = 100;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 0);
      });
    });

    const mainContainers = await page.$$eval('li.ov.ow', async (containers) => {
        const promises = containers.map(async (container) => {
          console.log("container:", container)
          console.log("containers:", containers)
      
          const productTitleElement = await container.querySelector(".ke.kf.m5.bb h3");
      
          const productPriceElements = await container.querySelectorAll(".ly.al.ca.hg span");
          const productPriceTexts = Array.from(productPriceElements).map((el) => {
            return el.innerText.trim()
        }); //dc dd de ke kf m5 bb

          const productTitleElements = await container.querySelectorAll(".dc.dd.de.ke.kf.m5.bb span");
          const productTitleTexts = Array.from(productTitleElements).map((el) => {
           return el.innerText.trim()
        });
      
          const productDetailsElements = await container.querySelectorAll(".dc.e5.ed.df.b1 span");
          const productDetailsTexts = Array.from(productDetailsElements).map((el) => {
            return el.innerText.trim()
        });
      
          const productImageElements = await container.querySelectorAll("picture img");
          const productImageSrcs = Array.from(productImageElements).map((el) => {
            return el.src});
      
          return {
            title: productTitleElement ? productTitleElement.innerText.trim() : null,
            productTitle:productTitleTexts,
            prices: productPriceTexts,
            details: productDetailsTexts,
            images: productImageSrcs,
          };
        });
        
        return Promise.all(promises);
      });
      
      
      

    console.log("mainContainers:", mainContainers);
    return mainContainers
  } catch (error) {
    console.error("Error from crawler:", error);
  } 
//   finally {
//     if (page) {
//       await page.close();
//     }
//     await browserManager.closeBrowser();
//   }
};

// To call the function uncomment the line below
// module.exports.getProduct();



    //   const products =await containers.map(async (container) => {
    //     console.log("container:", container)
    //     const productTitleElement =await container.querySelector(
    //       ".ke.kf.m5.bb h3"
    //     );
    //     const productPriceElement =await container.querySelector(
    //       ".ly.al.ca.hg span" //ly al ca hg
    //     );
    //     const productDetailsElement =await container.querySelector(
    //       ".dc.e5.ed.df.b1 span" //dc e5 ed df b1
    //     );
    //     const productImageElement =await container.querySelector(".st.su.bb.ak picture img");

    // for (let index = 0; index < productTitleElement.length; index++) {
    //     const title = productTitleElement[index]
    //     const price = productPriceElement[index]
    //     const details = productDetailsElement[index]
    //     const image = productImageElement[index]

    //     const product = {
    //         title, price, details, image
    //     }

    //     store.push(product)
        
    //   }
    //   console.log("product:", store)
    //   return {
    //     title: productMainTitleElement ? {mainTitle:productMainTitleElement.innerText.trim(), products:store} : null,
       
    //   };

    /*
    function extractProductData() {
  const productContainers = document.querySelectorAll('a.al.ek.cz.d4.r3.r4.r5');
  const products = Array.from(productContainers).map(container => {
    const titleElement = container.querySelector('.dc.dd.de.kd.ke.m4.bb span');
    const priceElement = container.querySelector('.lx.al.ca.hf span');
    const descriptionElement = container.querySelector('.lx.kd.kf.ke.bb.r9.ex span');
    const imageElement = container.querySelector('img');

    return {
      title: titleElement ? titleElement.innerText.trim() : null,
      price: priceElement ? priceElement.innerText.trim() : null,
      description: descriptionElement ? descriptionElement.innerText.trim() : null,
      imageUrl: imageElement ? imageElement.src : null,
    };
  });

  console.log(products);
  return products;
}

// Call the function
extractProductData(); */