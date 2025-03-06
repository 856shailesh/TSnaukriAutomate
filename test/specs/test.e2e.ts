import { expect } from '@wdio/globals'

describe('Naukri Application', () => {
    it('Login', async () => {
        await browser.url("https://www.naukri.com/");
        await browser.maximizeWindow();
        await browser.deleteAllCookies();
        const currentURL = await browser.getUrl();
        const currentTitle = await browser.getTitle();
        console.log("Opened URL is ", currentURL, " & title is ", currentTitle);
        await browser.$("#login_Layer").click();
        await browser.$("//div[@class='form-row']/input[@type='text']").addValue("856shaileshkumar@gmail.com");
        await browser.$("//input[@type='password']").addValue("Spartans300");
        await browser.$("//button[@type='submit']").click();
        console.log("End of script");
    })
    it('Update Profile', async () => {
        //private By search = By.xpath("//div/div/span[@class='nI-gNb-sb__placeholder']");
        //private By completeProfile = By.xpath("//div[@class='view-profile-wrapper']/a");
        const searchBar = await $("//div/div/span[@class='nI-gNb-sb__placeholder']");
        //expect(await searchBar.isExisting()).toBeTrue();
        const completeProfile = await $("//div[@class='view-profile-wrapper']/a");
        //expect(await completeProfile.isDisplayed()).toBeTrue();
        completeProfile.click();
        console.log("Clicked on complete profile");

        const chatBot = await $("//div[@class='chatbot_DrawerContentWrapper']/div[@class='chatbot_Nav']/div");
        if (await chatBot.isExisting()) {
            chatBot.click
        } else {
            console.log("Chatbot not present , continue execution  ****************");
        }

        /*private By editResumeHeadline = By.xpath("//span[text()='Resume headline']/parent::div/span[@class='edit icon']");
        private By fillHeadline = By.xpath("//textarea[@id='resumeHeadlineTxt']");
        private By savefillHeadlineBtn = By.xpath("//button[@type='submit']");
        private By profileDropdown = By.xpath("//div[@class='nI-gNb-drawer__bars']");
        private By logoutBtn = By.xpath("//a[@title='Logout']"); */
        const uploadArea = await $("//div[@class='uploadCont']");
        const editResumeHeadline = await $("//span[text()='Resume headline']/parent::div/span[@class='edit icon']");
        const fillHeadline = await $("//textarea[@id='resumeHeadlineTxt']");
        const savefillHeadlineBtn= await $("//div[@class='row form-actions']//button[@type='submit']");
        const profileDropdown= await $("//div[@class='nI-gNb-drawer__bars']");
        const logoutBtn = await $("//a[@title='Logout']");

         if (await chatBot.isExisting()) {
            chatBot.click
        } else {
            console.log("Chatbot not present , continue execution  ****************");
        }
        await uploadArea.scrollIntoView();
        //await editResumeHeadline.scrollIntoView();
        expect(await editResumeHeadline.isDisplayed()).toBeTrue();
        await editResumeHeadline.click();
        const currentDateTime = new Date();
        console.log('Current Date and Time:', currentDateTime.toLocaleString());
        let textToenter = "Automation Testing using Javascript " + currentDateTime.toLocaleString();
        await fillHeadline.setValue(textToenter);
        await savefillHeadlineBtn.click();
        console.log("Saved it");
        await profileDropdown.click();
        await logoutBtn.click();

        const naukriHeader = await $("//div[@id='root']//h1");
        expect(await naukriHeader.isDisplayed());
        console.log("End of script");
        })
})

