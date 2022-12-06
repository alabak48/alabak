describe("Shoutem web", async () => {

        it("Check if Shoutem Pricing page is loading", async () => {
            await browser.url("https://shoutem.com/pricing/");

            await browser.pause(5000);
        });
});