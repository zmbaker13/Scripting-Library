SELECT        dbo.SatEQHeaderView.EQUIPID, dbo.SatEQHeaderView.CEID, dbo.SatCmdbCiEquipment.u_ceid, dbo.SatEQHeaderView.EQStatus, dbo.SatEQHeaderView.CurrentFlag, 
                         dbo.SatCmdbCiEquipment.CurrentFlag AS Expr1, dbo.SatCustomer.u_rsqm_pm_generation
FROM            dbo.SatEQHeaderView INNER JOIN
                         dbo.SatCmdbCiEquipment ON dbo.SatEQHeaderView.EQUIPID = dbo.SatCmdbCiEquipment.u_rsq_equipid INNER JOIN
                         dbo.SatCustomer ON dbo.SatCmdbCiEquipment.u_account = dbo.SatCustomer.CustomerID
WHERE        (dbo.SatEQHeaderView.CurrentFlag = 'Y') AND (dbo.SatCmdbCiEquipment.CurrentFlag = 'Y') AND (NOT (dbo.SatCmdbCiEquipment.u_ceid LIKE '0%')) AND 
                         (dbo.SatEQHeaderView.CEID LIKE '0%') AND (dbo.SatCustomer.u_rsqm_pm_generation = 1)