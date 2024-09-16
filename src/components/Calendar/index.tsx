import { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable, FlatList, LayoutRectangle} from "react-native";
import { LocaleConfig, Calendar as RNCalendar } from "react-native-calendars";
import { DateData, MarkedDates } from "react-native-calendars/src/types";
import Button from "../Button";
import {CalenderProps, DaySelectProps, MonthSelectProps, DayProps} from './type'
import { style } from "./style";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import Icon from "../Icon";

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesCondensed: ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

LocaleConfig.defaultLocale = 'en';

export default function Calendar({onApply, ...restProps}: CalenderProps): JSX.Element {
  const initialCalenderMonth = new Date()
  initialCalenderMonth.setDate(1)
  const [displayTest, setDisplayText] = useState<string>('-')
  const [calendarMonth, setCalendarMonth] = useState<Date>(initialCalenderMonth)
  const [monthSelect, setMonthSelect] = useState<boolean>(false)
  const locales = LocaleConfig.locales['en']

  function selectionToString(selection: DateData[]) : string{
    if (selection.length === 1){
      return `${locales.dayNamesCondensed[new Date(selection[0].timestamp).getDay()]}, ${locales.monthNamesShort[new Date(selection[0].timestamp).getMonth()]} ${selection[0].day}`
    } else if (selection.length > 1) {
      return `${locales.monthNamesShort[new Date(selection[0].timestamp).getMonth()]} ${selection[0].day} - ${locales.monthNamesShort[new Date(selection[selection.length -1].timestamp).getMonth()]} ${selection[selection.length -1].day}`
    } else {
      return '-'
    }
  }

  const onMonthArrowPress = useCallback((amount: 1 | -1) => {
    if (amount === 1){
      var _date = new Date(calendarMonth)
      _date.setMonth(_date.getMonth() + 1)
    } else {
      var _date = new Date(calendarMonth)
      _date.setMonth(_date.getMonth() - 1)
    }
    setCalendarMonth(_date)
  }, [calendarMonth])

  return (
    <View style={style.container}>
      <View style={style.header}> 
        <Text style={style.labelText}>Select Date</Text>
        <Text style={style.displayText}>{displayTest}</Text>
      </View>
      <View style={style.monthControls}>
        <Button style={style.monthSelect} type='text' size="small" onPress={() => setMonthSelect(!monthSelect)}>
          <Text style={style.labelText}>{locales.monthNames[calendarMonth.getMonth()]}</Text>
          <Icon iconName={monthSelect ? "caretUp" : "caretDown"} width={18} height={18} fill={colors.hex.charcoal[40]}/>
        </Button>
        {!monthSelect &&
          <View style={style.monthArrows}>
            <Button style={style.monthArrow} type='text' color="white" onPress={()=> onMonthArrowPress(-1)}>
              <Icon iconName={"chevronLeftFilled"} width={18} height={18} />
            </Button>
            <Button style={style.monthArrow} type='text' color="white" onPress={()=> onMonthArrowPress(1)}>
              <Icon iconName={"chevronRightFilled"} width={18} height={18} />
            </Button>
          </View>
        }
      </View>
      {!monthSelect
        ? <DaySelect
          {...restProps}
          calendarMonth={calendarMonth}
          onApply={(selection) => { if(onApply) {onApply(selection)}}}
          onSelectionChange={(_selection) => setDisplayText(selectionToString(_selection))}
        /> 
        : <MonthSelect
            initialMonth={calendarMonth.getMonth()}
            onCancel={() => setMonthSelect(false)} 
            onSelectMonth={(_selectedMonth) => {
              setMonthSelect(false)
              const _date = new Date(calendarMonth)
              _date.setMonth(_selectedMonth)
              setCalendarMonth(_date)
            }}/>
      }
    </View>
  )     
}

function Day({state, marking, date, onPress, onLongPress, calendarDimensions}: DayProps) : JSX.Element {
  const today = state === 'today'
  if(marking) {
    var {selected, marked, startingDay, endingDay} = marking
  }

  console.log(marking)
  return (
    <Pressable 
      onPress={() => onPress(date)} 
      onLongPress={() => onLongPress(date)}
      style={[{
        alignItems: 'center',
        justifyContent: 'center',
        width: calendarDimensions !== undefined ? calendarDimensions.width / 7: 0,
        height: calendarDimensions !== undefined ? calendarDimensions.width / 7: 0,
      }
    ]}
    >
      <View style={[
        {
          width: '100%', 
          alignItems: 'center',
          justifyContent: 'center'
        },
        marked && !startingDay && !endingDay && {
          backgroundColor: colors.hex.charcoal[70]
        },
      ]}>
        { (startingDay || endingDay) &&
          <View style={{
            width: '50%',
            height: '100%',
            position: 'absolute',
            left: startingDay ? '50%': 0,
            right: endingDay ? '50%': 0,
            backgroundColor: colors.hex.charcoal[70]
          }}/>
        }
        <View 
          style={[
            style.dayTextContainer,
            today && {
              borderColor: colors.hex.primary
            },
            selected && {
              backgroundColor: colors.hex.primary
            },
        ]}>
          <Text 
            style={[
              style.dayText, 
              today && {color: colors.hex.primary},
              selected && {color: colors.hex.white}
            ]}>
            {date.day}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

function DaySelect({onApply, calendarMonth, onSelectionChange, ...restProps}: DaySelectProps) {
  const [selection, setSelection] = useState<DateData[]>([])
  const [calendarDimensions, setCalendatDimensions] = useState<LayoutRectangle>()
  const [markedDates, setMarkedDates] = useState<MarkedDates>()

  const onDayPress = useCallback((dateData: DateData) => {
    let _selection = [];

    if (_selection[0] !== undefined && dateData.dateString === _selection[0].dateString) {
      _selection = []
    } else _selection = [dateData]

    setSelection(_selection)
  },[selection])

  const onDayLongPress = useCallback((dateData: DateData) => {
    console.log('onDayLongPress', dateData);
    let _selection = [...selection]

    if (_selection.length === 0) {
      _selection[0] = dateData
    } else {
      const index = _selection.findIndex(s => s.dateString === dateData.dateString);
      if (index !== -1) {
        if (index === 0) {
          _selection = []
        }
        else if (index === _selection.length -1) {
          _selection = [_selection[0]]
        } else {
          _selection.splice(index + 1)
        }
      } else {
        const date = new Date(dateData.dateString);
        const last = new Date(_selection[_selection.length -1].dateString)
        var increment = last

        while(increment.valueOf() !== date.valueOf()){
         date < last 
          ? increment.setDate(increment.getDate() - 1)
          : increment.setDate(increment.getDate() + 1)
    
          const element: DateData = {
            year: increment.getFullYear(),
            month: increment.getMonth(),
            day: increment.getDate(),
            timestamp: increment.valueOf(),
            dateString: increment.toISOString().split('T')[0],
          }
          _selection.push(element);
        }
      }
    }
    _selection.sort((a, b) => {
      return a.timestamp - b.timestamp
    })

    setSelection(_selection)
  }, [selection]);

  function parseMarkedDates(dateData: DateData[]): MarkedDates{
    const markedDates: Record<string, MarkingProps> = {}

    for(var i = 0; i < dateData.length; i++){
      const start = i === 0;
      const end = i === dateData.length -1

      markedDates[dateData[i].dateString] = {
        selected: start || end, 
        marked: dateData.length > 1,
        startingDay: start  && dateData.length > 1,
        endingDay: end && dateData.length > 1,
      }
    }

    return markedDates
  }

  useEffect(() => {
    setMarkedDates(parseMarkedDates(selection))
    if (onSelectionChange) {
      onSelectionChange(selection)
    }
  },[selection])

  return (
    <View onLayout={(event) => setCalendatDimensions(event.nativeEvent.layout)}>
      <RNCalendar
        {...restProps}
        style={style.calendar}
        dayComponent={(props) => <Day {...props} calendarDimensions={calendarDimensions}/>}
        theme={{
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textMonthFontFamily: typography.DINPro,
          textDayFontFamily: typography.DINPro,
          dayTextColor: colors.hex.white,
          calendarBackground: colors.hex.black
        }}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
        onDayLongPress={onDayLongPress}
        initialDate={calendarMonth.toISOString().split('T')[0]}
        renderHeader={() => <></>}
        enableSwipeMonths={false}
        hideExtraDays={true}
        disableMonthChange={true}
        hideArrows={true}
      />
      <View style={style.buttons}>
        <Button style={[style.button, style.clearButton]} color="black" onPress={() => setSelection([])}>
          <Text style={style.buttonText}>Clear</Text>
        </Button>
        <Button style={style.button} color="primary" onPress={() => { if(onApply) {onApply(selection)}}}>
          <Text>Apply</Text>
        </Button>
      </View>
    </View>
  )
}

function MonthSelect({onSelectMonth, onCancel, initialMonth}: MonthSelectProps) {
  const [selectedMonth, setSelectedMonth] = useState<number>(initialMonth)
  const monthNames: string[] = LocaleConfig.locales['en'].monthNames

  useEffect(() => {setSelectedMonth(initialMonth)}, [initialMonth])

  return (
    <View>
      <FlatList       
        data={monthNames}
        style={style.months}
        contentContainerStyle={{gap: 8}}
        columnWrapperStyle={{gap: 8}}
        numColumns={3}
        renderItem={({item,index}) => 
          <Button 
            key={'month_button_' + index}
            style={style.monthButton} 
            color={index === selectedMonth ? 'primary' : 'black'}
            type={index === selectedMonth ? 'filled' : 'text'} 
            size="small" 
            onPress={() => setSelectedMonth(index)}>
            <Text style={style.monthButtonText}>{item}</Text>
          </Button>
        }
      />
      <View style={style.buttons}>
        <Button 
          style={[style.button, style.clearButton]} 
          color="black" 
          onPress={() => { if(onCancel) { onCancel()} }}>
          <Text style={style.buttonText}>Cancel</Text>
        </Button>
        <Button 
          style={style.button} 
          color="primary" 
          onPress={() => { if(onSelectMonth) { onSelectMonth(selectedMonth)} }}>
          <Text>Select</Text>
        </Button>
      </View>
    </View>
  )
}
