class IconSetter {
  constructor() {
  }

  assign(arg) {

    let icon = ''
    
    if(arg.toLowerCase().includes('arson')){icon = 'img/arson.png'}
    else if(arg.toLowerCase().includes('aggravated assault')){icon = 'img/assault.png'}
    else if(arg.toLowerCase().includes('burglary')){icon = 'img/burglary.png'}
    else if(arg.toLowerCase().includes('drug')){icon = 'img/drug.png'}
    else if(arg.toLowerCase().includes('larceny')){icon = 'img/larceny.png'}
    else if(arg.toLowerCase().includes('vandal')){icon = 'img/vandal.png'}
    else if(arg.toLowerCase().includes('credit')){icon = 'img/credit.png'}
    else if(arg.toLowerCase().includes('counterfeit')){icon = 'img/counterfeit.png'}
    else if(arg.toLowerCase().includes('prostitution')){icon = 'img/prostitution.png'}
    else if(arg.toLowerCase().includes('porn')){icon = 'img/porn.png'}
    else if(arg.toLowerCase().includes('impersonation')){icon = 'img/impersonation.png'}
    else if(arg.toLowerCase().includes('motor vehicle theft')){icon = 'img/gta.png'}
    else if(arg.toLowerCase().includes('theft from motor vehicle')){icon = 'img/theftMotor.png'}
    else if(arg.toLowerCase().includes('shoplifting')){icon = 'img/shoplifting.png'}
    else if(arg.toLowerCase().includes('simple assault')){icon = 'img/simpleAssault.png'}
    else if(arg.toLowerCase().includes('robbery')){icon = 'img/robbery.png'}
    else if(arg.toLowerCase().includes('theft of motor vehicle parts/accessories')){icon = 'img/partTheft.png'}
    else if(arg.toLowerCase().includes('kidnaping/abduction')){icon = 'img/kidnapping.png'}
    else if(arg.toLowerCase().includes('intimidation')){icon = 'img/intimidation.png'}
    else if(arg.toLowerCase().includes('swindle')){icon = 'img/swindle.png'}
    else if(arg.toLowerCase().includes('theft from coin operated machine or device')){icon = 'img/vending.png'}
    else if(arg.toLowerCase().includes('weapon law')){icon = 'img/weaponLaw.png'}
    else if(arg.toLowerCase().includes('fraud')){icon = 'img/fraud.png'}
    else if(arg.toLowerCase().includes('violation of no contact/protection order')){icon = 'img/trespass.png'}
    else if(arg.toLowerCase().includes('embezzlement')|| arg.toLowerCase().includes('blackmail')){icon = 'img/blackmail.png'}
    else if(arg.toLowerCase().includes('justifiable homicide')|| arg.toLowerCase().includes('murder')){icon = 'img/death.png'}
    else if(arg.toLowerCase().includes('theft from building')|| arg.toLowerCase().includes('stolen property')){icon = 'img/propertyBuilding.png'}
    else if(arg.toLowerCase().includes('pocket-picking')|| arg.toLowerCase().includes('purse-snatching')){icon = 'img/pickpocket.png'}
    else{
      icon = 'img/default.png'
      console.log('icon setter error')
    }
    return icon
  }
}