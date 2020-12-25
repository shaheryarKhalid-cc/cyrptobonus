const Firestore = require('@google-cloud/firestore');
const firestore= new Firestore({
    projectId: 'cyrptobonus-demo',
    keyFilename: 'pilotbonus.json',
});
async function register() {
    // Obtain a document reference.
    const document = firestore.doc('aapilots/keith birdsall');

    // Enter new data into the document.
    await document.set({
        firstname: 'mark',
        lastname: 'smith',
        email: 'mark.smith@ec2token.com',
        password: '123456',
    });
    console.log('Entered new data into the document');

    // Update an existing document.
    //await document.update({
    //password: '123',
    //});
    //console.log('Updated an existing document');

    // Read the document.
    const doc = await document.get();
    console.log(doc);

    // Delete the document.
    //await document.delete();
    //console.log('Deleted the document');
}
function Validate(){

}
register();

