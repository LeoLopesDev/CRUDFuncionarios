package com.hepta.funcionarios.persistence;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import com.hepta.funcionarios.entity.Setor;

public class SetorDAO {

		public Setor update(Setor Setor) throws Exception {
			EntityManager em = HibernateUtil.getEntityManager();
			Setor SetorAtualizado = null;
			try {
				em.getTransaction().begin();
				SetorAtualizado = em.merge(Setor);
				em.getTransaction().commit();
			} catch (Exception e) {
				em.getTransaction().rollback();
				throw new Exception(e);
			} finally {
				em.close();
			}
			return SetorAtualizado;
		}

		public Setor find(Integer id) throws Exception {
			EntityManager em = HibernateUtil.getEntityManager();
			Setor Setor = null;
			try {
				Setor = em.find(Setor.class, id);
			} catch (Exception e) {
				em.getTransaction().rollback();
				throw new Exception(e);
			} finally {
				em.close();
			}
			return Setor;
		}

		@SuppressWarnings("unchecked")
		public List<Setor> getAll() throws Exception {
			EntityManager em = HibernateUtil.getEntityManager();
			List<Setor> Setores = new ArrayList<>();
			try {
				Query query = em.createQuery("FROM Setor");
				Setores = query.getResultList();
			} catch (Exception e) {
				em.getTransaction().rollback();
				throw new Exception(e);
			} finally {
				em.close();
			}
			return Setores;
		}
		
		public void save(Setor Setor) throws Exception {
			EntityManager em = HibernateUtil.getEntityManager();
			try {
				em.getTransaction().begin();
				em.persist(Setor);
				em.getTransaction().commit();
			} catch (Exception e) {
				em.getTransaction().rollback();
				throw new Exception(e);
			} finally {
				em.close();
			}
		
		}	
}
