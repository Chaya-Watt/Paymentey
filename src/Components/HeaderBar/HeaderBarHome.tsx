import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '@Constants';
import {TypeHeaderBarHome} from '@Types';
import menuIcon from '@Icons/menu-icon.png';

const height = Dimensions.get('window').height;
const headerHeight = height / 3;

const HeaderBarHome: React.FC<TypeHeaderBarHome> = ({
  imageProfile,
  name,
  description,
  onPress,
}) => {
  return (
    <View style={styles.containerHeaderBar}>
      <View style={styles.positionIcon}>
        <TouchableOpacity onPress={onPress}>
          <Image source={menuIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerContent}>
        <View>
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
        <Image style={styles.imageProfile} source={{uri: imageProfile}} />
      </View>
    </View>
  );
};

export default HeaderBarHome;

const styles = StyleSheet.create({
  containerHeaderBar: {
    height: headerHeight,
    width: '100%',
    padding: 20,
    backgroundColor: COLORS.SOFT_BLUE,
  },

  positionIcon: {
    alignSelf: 'flex-end',
  },

  icon: {
    width: 20,
    height: 20,
    opacity: 0.7,
  },

  containerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  textName: {
    color: COLORS.PINK,
    fontFamily: FONTS.MITR_MEDIUM,
    fontSize: 24,
  },

  headerStatus: {
    color: COLORS.PINK,
    fontFamily: FONTS.MITR_REGULAR,
    fontSize: 18,
    opacity: 0.8,
  },

  textStatus: {
    color: COLORS.PINK,
    fontFamily: FONTS.MITR_LIGHT,
    fontSize: 18,
  },

  imageProfile: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.SOFT_PINK,
    borderRadius: 50,
  },
});
