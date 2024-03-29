import {COLORS, FONTS} from '@Constants';
import {TypeDropDownProps, TypeListOfDropDown} from '@Types';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DropDown: React.FC<TypeDropDownProps> = ({
  icon,
  label,
  listSelect,
  onPress,
  placeholder,
  selected,
  isOpen,
  onSelect,
  customStyleContainer,
  customStyleDropDownColor,
  isError,
  textError,
}) => {
  return (
    <View style={[styles.width, customStyleContainer]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.containerDropDown,
            customStyleDropDownColor && customStyleDropDownColor,
          ]}>
          <Text style={styles.textTitle}>
            {selected ? selected.label : placeholder}
          </Text>
          <Image source={icon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.listSelection}>
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
      {isError && <Text style={styles.textError}>{textError}</Text>}
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
          styles.select,
          isSelected && styles.activeSelected,
          isLastItem && styles.lastOfList,
        ]}>
        <Text style={styles.textSelect}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  width: {
    width: '100%',
  },

  label: {
    fontFamily: FONTS.MITR_REGULAR,
    color: COLORS.BLACK,
    fontSize: 14,
    marginBottom: 5,
  },

  containerDropDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    padding: 15,
    backgroundColor: COLORS.PINK,
    borderRadius: 10,
  },

  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.DARK_GRAY,
  },

  textTitle: {
    fontFamily: FONTS.MITR_MEDIUM,
    fontSize: 14,
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
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
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

  textError: {
    color: COLORS.RED,
    fontFamily: FONTS.MITR_LIGHT,
    fontSize: 12,
    marginTop: 3,
  },
});
