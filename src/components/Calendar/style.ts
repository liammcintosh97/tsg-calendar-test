import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { textStyles } from "../../styles"

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.hex.black,
  },
  calendar: {
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'transparent',
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 8
  },
  button:{
    flex: 1
  },
  buttonText:{
    ...textStyles.label[2],
    color: colors.hex.white,
  },
  clearButton: {
    backgroundColor:  colors.hex.black,
  },
  dayTextContainer: {
    padding: 10,
    borderRadius: 100,
    borderWidth: 1, 
    borderColor: 'transparent'
  },
  dayText:{
    ...textStyles.label[2],
    color: colors.hex.white,
    width: 18,
    textAlign: 'center'
  },
  displayText: {
    ...textStyles.display[1],
    color: colors.hex.charcoal[20]
  },
  labelText: {
    ...textStyles.label[3],
    color: colors.hex.charcoal[40]
  },
  header: {
    paddingTop: 20,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 24
  },
  monthControls: {
    paddingTop: 4,
    paddingRight: 12,
    paddingBottom: 4,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  monthSelect: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 12,
    paddingRight: 4,
    paddingBottom: 12,
    paddingLeft: 8
  },
  monthArrows: {
    flexDirection: 'row'
  },
  monthArrow: {
    padding: 12
  },
  months: {
    paddingLeft: 24,
    paddingBottom: 16,
    paddingRight: 24,
    gap: 8
  },
  monthButton: {
    flex: 1,
    maxWidth: '33.33%',
    alignItems: "center",
    borderRadius: 100,
    paddingTop: 8,
    paddingBottom: 8,
  },
  monthButtonText: {
    ...textStyles.label[2],
    color: colors.hex.white
  }

})