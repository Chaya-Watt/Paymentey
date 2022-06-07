import {COLORS, FONTS} from '@Constants';
import {TypeDropDownProps, TypeListOfDropDown} from '@Types';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DropDown: React.FC<TypeDropDownProps> = ({
  icon,
  listSelect,
  onPress,
  placeholder,
  selected,
  isOpen,
  onSelect,
  customStyle,
}) => {
  return (
    <View style={styles({}).width}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles({}).containerDropDown, customStyle]}>
          <Text style={styles({}).textTitle}>
            {selected ? selected.label : placeholder}
          </Text>
          <Image source={icon} style={styles({}).icon} />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles({}).listSelection}>
          {listSelect.map((item, index) => (
            <Select
              key={item.id}
              onSelect={onSelect}
              item={item}
              isSelected={selected?.id === item.id}
              isLastItem={listSelect.length === index + 1}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const Select: React.FC<{
  onSelect: (item: TypeListOfDropDown) => void;
  item: TypeListOfDropDown;
  isSelected: boolean;
  isLastItem: boolean;
}> = ({onSelect, item, isSelected, isLastItem}) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <View
        style={[
          styles({}).select,
          isSelected && styles({}).activeSelected,
          isLastItem && styles({}).lastOfList,
        ]}>
        <Text style={styles({}).textSelect}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DropDown;

const styles = ({bg, width}: {bg?: string; width?: number}) =>
  StyleSheet.create({
    width: {
      width: width ? width : 280,
    },

    containerDropDown: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',

      padding: 15,
      backgroundColor: bg ? bg : COLORS.PINK,
      borderRadius: 10,
    },

    icon: {
      width: 20,
      height: 20,
      tintColor: COLORS.DARK_GRAY,
    },

    textTitle: {
      fontFamily: FONTS.MITR_MEDIUM,
      fontSize: 16,
      color: COLORS.WHITE,
    },

    listSelection: {
      marginTop: -10,
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: COLORS.WHITE,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },

    select: {
      marginBottom: 10,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 5,
    },

    activeSelected: {
      backgroundColor: COLORS.SOFT_BLUE,
    },

    lastOfList: {
      marginBottom: 0,
    },

    textSelect: {
      fontSize: 14,
      fontFamily: FONTS.MITR_REGULAR,
    },
  });
