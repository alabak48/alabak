describe("Shoutem web", async () => {

        it("Check if Shoutem Pricing page is loading", async () => {
            await browser.url("https://shoutem.com/pricing/");

           const heading = await $("h1");
           await expect(heading).toHaveText("There are more ways to create apps with Shoutem");
        });

        it("Check if template is loaded", async () => {
            await browser.url("https://shoutem.com/apps/social-network/");

           const button = await $('a=Build now');
           await button.click();
           
           const heading = await $(".page-title");
           await expect(heading).toHaveText("Choose an app template");
        });
});