import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS} from '@Constants';
import {TypeHeaderBar} from '@Types';

const HeaderBar: React.FC<TypeHeaderBar> = ({
  imageProfile,
  name,
  description,
}) => {
  return (
    <View style={styles.containerHeaderBar}>
      <Image style={styles.imageProfile} source={{uri: imageProfile}} />
      <View style={styles.containerName}>
        <Text numberOfLines={1} style={styles.textName}>
          {name}
        </Text>
        <Text style={styles.headerStatus}>
          Status :{' '}
          <Text numberOfLines={1} style={styles.textStatus}>
            {description}
          </Text>
        </Text>
      </View>
      {/* <View>
        <Text>Icon</Text>
      </View> */}
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  containerHeaderBar: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.SOFT_BLUE,
  },

  imageProfile: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.SOFT_PINK,
    borderRadius: 50,
  },

  containerName: {
    flex: 1,
    marginHorizontal: 15,
  },

  textName: {
    color: COLORS.SOFT_RED,
    fontFamily: FONTS.MITR_MEDIUM,
    fontSize: 16,
  },

  headerStatus: {
    color: COLORS.SOFT_PINK,
    fontFamily: FONTS.MITR_REGULAR,
    fontSize: 14,
  },

  textStatus: {
    color: COLORS.SOFT_PINK,
    fontFamily: FONTS.MITR_LIGHT,
    fontSize: 14,
  },
});
