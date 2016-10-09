import React from 'react'
import {ScrollView, Text, Image} from 'react-native'
import tenPrinciples from '../../images/principles/Ten_Principles.png'
import styles from '../styles/PrinciplesViewStyles'

export default React.createClass({
  render () {
    return (
      <ScrollView>
        <Image style={styles.tenImage} source={tenPrinciples}/>
        <Text style={styles.sectionHeader}>Radical Inclusion</Text>
        <Text style={styles.sectionDefinition}>Anyone may be a part of Alchemy. We welcome and respect the stranger. No prerequisites exist for participation in our community.</Text>
        <Text style={styles.sectionHeader}>Gifting</Text>
        <Text style={styles.sectionDefinition}>Alchemy is devoted to acts of gift giving. The value of a gift is unconditional. Gifting does not contemplate a return or an exchange for something of equal value.</Text>
        <Text style={styles.sectionHeader}>Decommodification</Text>
        <Text style={styles.sectionDefinition}>In order to preserve the spirit of gifting, our community seeks to create social environments that are unmediated by commercial sponsorships, transactions, or advertising. We stand ready to protect our culture from such exploitation. We resist the substitution of consumption for participatory experience.</Text>
        <Text style={styles.sectionHeader}>Radical Self-reliance</Text>
        <Text style={styles.sectionDefinition}>Alchemy encourages the individual to discover, exercise and rely on his or her inner resources.</Text>
        <Text style={styles.sectionHeader}>Radical Self-expression</Text>
        <Text style={styles.sectionDefinition}>Radical self-expression arises from the unique gifts of the individual. No one other than the individual or a collaborating group can determine its content. It is offered as a gift to others. In this spirit, the giver should respect the rights and liberties of the recipient.</Text>
        <Text style={styles.sectionHeader}>Communal Effort</Text>
        <Text style={styles.sectionDefinition}>Our community values creative cooperation and collaboration. We strive to produce, promote and protect social networks, public spaces, works of art, and methods of communication that support such interaction.</Text>
        <Text style={styles.sectionHeader}>Civic Responsibility</Text>
        <Text style={styles.sectionDefinition}>We value civil society. Community members who organize events should assume responsibility for public welfare and endeavor to communicate civic responsibilities to participants. They must also assume responsibility for conducting events in accordance with local, state and federal laws.</Text>
        <Text style={styles.sectionHeader}>Leaving No Trace</Text>
        <Text style={styles.sectionDefinition}>Our community respects the environment. We are committed to leaving no physical trace of our activities wherever we gather. We clean up after ourselves and endeavor, whenever possible, to leave such places in a better state than when we found them.</Text>
        <Text style={styles.sectionHeader}>Participation</Text>
        <Text style={styles.sectionDefinition}>Our community is committed to a radically participatory ethic. We believe that transformative change, whether in the individual or in society, can occur only through the medium of deeply personal participation. We achieve being through doing. Everyone is invited to work. Everyone is invited to play. We make the world real through actions that open the heart.</Text>
        <Text style={styles.sectionHeader}>Immediacy</Text>
        <Text style={styles.sectionDefinition}>Immediate experience is, in many ways, the most important touchstone of value in our culture. We seek to overcome barriers that stand between us and a recognition of our inner selves, the reality of those around us, participation in society, and contact with a natural world exceeding human powers. No idea can substitute for this experience.</Text>
      </ScrollView>
    )
  }
})
