import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {COLORS, FONTS} from '@Constants';
import {TypeHeaderBar} from '@Types';
import {formatCurrency} from '@Helpers';

const HeaderBar: React.FC<TypeHeaderBar> = ({
  icon,
  headerTitle,
  title,
  headerDescription,
  description,
}) => {
  return (
    <View style={styles.containerHeaderBar}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.containerContent}>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {headerTitle} :<Text style={styles.title}> {title}</Text>
        </Text>
        <Text style={styles.headerDescription}>
          {headerDescription} :{' '}
          {typeof description === 'number'
            ? formatCurrency(description)
            : description}
        </Text>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  containerHeaderBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.SOFT_BLUE,
  },

  icon: {
    width: 40,
    height: 40,
  },

  containerContent: {
    flex: 1,
    marginLeft: 10,
  },

  headerTitle: {
    fontFamily: FONTS.MITR_MEDIUM,
    fontSize: 16,
    color: COLORS.PINK,
    marginBottom: 5,
  },

  title: {
    fontSize: 14,
  },

  headerDescription: {
    fontFamily: FONTS.MITR_REGULAR,
    fontSize: 12,
    color: COLORS.DARK_GRAY,
  },
});
