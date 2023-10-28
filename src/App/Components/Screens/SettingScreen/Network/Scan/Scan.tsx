import { FC } from "react";
import { Portal } from "../../../../Providers/Portal/Portal";
import style from "./Scan.module.scss";
import { Modal } from "../../../../UI/Modal/Modal";
import { useGetScanQuery } from "../../../../../services/networkApi/networkApi";
import { Grid } from "../../../../UI/Grid/Grid";
import { Button } from "../../../../UI/Button/Button";
import { Loading } from "../../../../UI/Loading/Loading";
import { CloseBtn } from "../../../../UI/Msg/CloseBtn/CloseBtn";
import { Link, useSearchParams } from "react-router-dom";

interface IScan {
  isModal: boolean;
  setIsModalScan: (value: boolean) => void;
}

export const Scan: FC<IScan> = ({ isModal, setIsModalScan }) => {
  const { data, isFetching, duration, refetch } = useGetScanQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      data: data?.unknown_hosts.map((host) => ({ host })),
      isFetching,
      duration: data?.duration,
    }),
  });

  return (
    <Portal>
      <Modal
        close={() => setIsModalScan(false)}
        isActive={isModal}
        isClosesModal
      >
        <div className={style.scan}>
          <CloseBtn close={() => setIsModalScan(false)} />
          <span>Сканирование сети</span>
          <Grid
            data={data || []}
            isLoading={isFetching}
            columns={[
              { dataIndex: "host", width: 200, title: "Host" },
              {
                dataIndex: "host",
                width: 150,
                title: "",
                renderer(value, record) {
                  return (
                    <Button icon="plus">
                      <Link
                        className={style.btn}
                        to={{
                          pathname: "/constructor/new",
                        }}
                        state={{ host: record.host }}
                      >
                        Создать
                      </Link>
                    </Button>
                  );
                },
              },
            ]}
            loaderCmp={<Loading />}
            numberingRecord
          />
          {isFetching || (
            <div className={style.duration}>Время: {duration} сек</div>
          )}
          <div className={style.btns}>
            <Button icon="radar" onClick={() => refetch()}>
              Сканировать
            </Button>
            <Button icon="x" onClick={() => setIsModalScan(false)}>
              Отмена
            </Button>
          </div>
        </div>
      </Modal>
    </Portal>
  );
};
