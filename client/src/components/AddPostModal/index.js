import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import FileBase64 from 'react-file-base64'
import {useSelector} from 'react-redux';
import {modalState$, meState$} from '../../redux/selectors';
import {createSuccessState$} from '../../redux/selectors';
import {useDispatch} from "react-redux";
import {createPost, hideModal} from '../../redux/actions';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  });
  
  NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
export default function CreatepostModal() {
    const user = useSelector(meState$);
    const [data, setData] = React.useState({
        positions: {
            from: {
                lat: 16.05540577507346,
                lng: 108.18404204532841,
                label: ""
            },
            to: {
                lat: 16.00755998782115, 
                lng: 108.23451049085539,
                label: ""
            },
        },
        note: '',
        date: '',
        time: '',
        findDrive: true,
        money: 0,
        author: {
            _id: "",
            name: ""
        }
    })
    React.useEffect(()=>{
        setData({
            ...data,
            author: {
                ...data.author,
                _id: user?.data?._id,
                name: user?.data?.name
            }
        })
      },[user])
    const {isShow} = useSelector(modalState$);
    const createSuccess = useSelector(createSuccessState$);
    const dispatch = useDispatch();
    const onClose = React.useCallback(() => {
        dispatch(hideModal())
    }, [dispatch]);

    const onSubmit = React.useCallback(() => {
        dispatch(createPost.createPostRequest(data));
        onClose();
        setData({
            positions: {
                from: {
                    lat: 16.05540577507346,
                    lng: 108.18404204532841,
                    label: ''
                },
                to: {
                    lat: 16.00755998782115, 
                    lng: 108.23451049085539,
                    label: ''
                },
            },
            note: '',
            date: '',
            time: '',
            findDrive: true,
            money: 0,
            author: {
                _id: user?.data?._id,
                name: user?.data?.name
            }

        });
    }, [data, dispatch, onClose])
    return (
        <div>
            <Dialog open={isShow} onClose={onClose}>
                <DialogTitle>Tạo chuyến đi mới</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hãy cùng nhau tận hưởng chuyến đi trọn vẹn nhé!
                    </DialogContentText>
                    <form noValidate="noValidate" autoComplete="off" className={{}}>
                        <div className='findDriveBox'>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox checked = {
                                    data.findDrive
                                } />}
                                onChange={() => setData({
                                    ...data,
                                    findDrive: !data.findDrive
                                })}
                                label="Tìm tài xế"
                                labelPlacement="end"/>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox checked = {
                                    !data.findDrive
                                } />}
                                onChange={() => setData({
                                    ...data,
                                    findDrive: !data.findDrive
                                })}
                                label="Tìm yên sau"
                                labelPlacement="end"/>

                        </div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Ngày khởi hành"
                                inputFormat="MM/dd/yyyy"
                                value={data.date}
                                onChange={(e) => setData({
                                    ...data,
                                    date: e
                                })}
                                renderInput={(params) => <TextField {...params}/>
                                }
                            />
                            <TimePicker
                                label="Giờ khởi hành"
                                value={data.time}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        time: e
                                    })
                                }}
                                renderInput={(params) => <TextField {...params}/>
                                }
                            />
                        </LocalizationProvider >
                        <TextField
                            autoFocus="autoFocus"
                            margin="dense"
                            id="from"
                            label="Điểm đi"
                            type="text"
                            fullWidth="fullWidth"
                            variant="standard"
                            value={data.positions.from.label}
                            onChange={(e) => setData({
                                ...data,
                                positions: {
                                    ...data.positions,
                                    from: {
                                        ...data.positions.from,
                                       label: e.target.value
                                    }
                                }
                            })}/>
                        <TextField
                            autoFocus="autoFocus"
                            margin="dense"
                            id="to"
                            label="Điểm đến"
                            type="text"
                            fullWidth="fullWidth"
                            variant="standard"
                            value={data.positions.to.label}
                            onChange={(e) => setData({
                                ...data,
                                positions: {
                                    ...data.positions,
                                    to: {
                                        ...data.positions.to,
                                       label: e.target.value
                                    }
                                }
                            })}/>
                         <TextField
                            label="Giá tiền"
                            value={data.money}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    money: e.target.value
                                })
                            }}
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                            inputComponent: NumberFormatCustom,
                            }}
                            variant="standard"
      />
                        <TextField
                            autoFocus="autoFocus"
                            margin="dense"
                            id="note"
                            label="Ghi chú"
                            type="text"
                            fullWidth="fullWidth"
                            variant="standard"
                            value={data.note}
                            onChange={(e) => setData({
                                ...data,
                                note: e.target.value
                            })}/>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>HỦY</Button>
                    <Button onClick={onSubmit}>ĐĂNG BÀI</Button>
                </DialogActions>
            </Dialog >
        </div>
    )
}