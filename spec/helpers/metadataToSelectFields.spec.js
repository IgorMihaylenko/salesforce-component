describe('Metadata to select fields conversion', function () {

    var metadataToSelectFields = require('../../lib/helpers/metadataToSelectFields');

    it('should convert metadata out properties to a comma separated string value', function () {

        var metadata = {
            description: 'Contact',
            type: 'object',
            properties: { LastName: {},
                FirstName: {},
                Salutation: {},
                OtherStreet: {},
                OtherCity: {},
                OtherState: {},
                OtherPostalCode: {},
                OtherCountry: {},
                MailingStreet: {},
                MailingCity: {},
                MailingState: {},
                MailingPostalCode: {},
                MailingCountry: {},
                Phone: {},
                Fax: {},
                MobilePhone: {},
                HomePhone: {},
                OtherPhone: {},
                AssistantPhone: {},
                Email: {},
                Title: {},
                Department: {},
                AssistantName: {},
                LeadSource: {},
                Birthdate: {},
                Description: {},
                EmailBouncedReason: {},
                EmailBouncedDate: {},
                Jigsaw: {},
                Level__c: {},
                Languages__c: {}
            }
        };

        var result = metadataToSelectFields(metadata);
        expect(result).toEqual("LastName,FirstName,Salutation,OtherStreet,OtherCity,OtherState,OtherPostalCode,OtherCountry,MailingStreet,MailingCity,MailingState,MailingPostalCode,MailingCountry,Phone,Fax,MobilePhone,HomePhone,OtherPhone,AssistantPhone,Email,Title,Department,AssistantName,LeadSource,Birthdate,Description,EmailBouncedReason,EmailBouncedDate,Jigsaw,Level__c,Languages__c");
    });

    it('should throw an exception if metadata.out doesn\'t exist', function () {

        expect(function () {
            metadataToSelectFields({});
        }).toThrow(new Error('No out metadata found to create select fields from'));

    });
});